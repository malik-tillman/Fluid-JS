import * as defaults from "./defaults";
import * as dither from "../assets/dither.png";

let active = false;
let cancel = false;
let ditherURL = "./assets/dither.png";

/**
 * Initiate WebGL Object
 *  Gets WebGL context and compiles shader programs.
 * @param canvas the <canvas> element from which we get the WebGL context
 */
export function initWebGL(canvas){
    /* Add default pointer */
    let pointers = [];
    pointers.push( new Pointer() );

    /* Get webGL context */
    let webGL = canvas.getContext('webgl2', defaults.DRAWING_PARAMS);
    const isWebGL2 = !!webGL;
    if (!isWebGL2)
        webGL = canvas.getContext('webgl', defaults.DRAWING_PARAMS) || canvas.getContext('experimental-webgl', defaults.DRAWING_PARAMS);

    /* Get color formats */
    let colorFormats = getFormats();

    /* Case support adjustments */
    if (isMobile())
        defaults.behavior.render_shaders = false;
    if (!colorFormats.supportLinearFiltering) {
        defaults.behavior.render_shaders = false;
        defaults.behavior.render_bloom = false;
    }

    /* Make our shaders and shader programs */
    const SHADER = {
        baseVertex               : compileShader(webGL.VERTEX_SHADER, defaults.SHADER_SOURCE.vertex),

        clear                    : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.clear),
        color                    : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.color),
        background               : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.background),
        display                  : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.display),
        displayBloom             : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.displayBloom),
        displayShading           : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.displayShading),
        displayBloomShading      : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.displayBloomShading),
        bloomPreFilter           : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.bloomPreFilter),
        bloomBlur                : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.bloomBlur),
        bloomFinal               : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.bloomFinal),
        splat                    : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.splat),
        advectionManualFiltering : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.advectionManualFiltering),
        advection                : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.advection),
        divergence               : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.divergence),
        curl                     : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.curl),
        vorticity                : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.vorticity),
        pressure                 : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.pressure),
        gradientSubtract         : compileShader(webGL.FRAGMENT_SHADER, defaults.SHADER_SOURCE.gradientSubtract)
    };
    let programs = formShaderPrograms(colorFormats.supportLinearFiltering);

    /* Worker Classes and Functions */
    /**
     *  Is It Mobile?:
     *  Detects whether or not a device is mobile by checking the user agent string
     *
     * @returns {boolean}
     */
    function isMobile () {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    /**
     *  Get Formats:
     *  Enable color extensions, linear filtering extensions, and return usable color formats RGBA,
     *  RG (Red-Green), and R (Red).
     *
     * @returns {{formatRGBA: {internalFormat, format}, supportLinearFiltering: OES_texture_half_float_linear,
     * formatR: {internalFormat, format}, halfFloatTexType: *, formatRG: {internalFormat, format}}}
     */
    function getFormats() {
        /* Color Formats */
        let formatRGBA;
        let formatRG;
        let formatR;

        let halfFloat;
        let supportLinearFiltering;

        /* Enables webGL color extensions and get linear filtering extension*/
        if (isWebGL2) {
            webGL.getExtension('EXT_color_buffer_float');
            supportLinearFiltering = webGL.getExtension('OES_texture_float_linear');
        } else {
            halfFloat = webGL.getExtension('OES_texture_half_float');
            supportLinearFiltering = webGL.getExtension('OES_texture_half_float_linear');
        }
        const HALF_FLOAT_TEXTURE_TYPE = isWebGL2 ? webGL.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;

        /* Set color to black for when color buffers are cleared */
        webGL.clearColor(0.0, 0.0, 0.0, 1.0);

        /* Retrieve color formats */
        if (isWebGL2) {
            formatRGBA = getSupportedFormat(webGL.RGBA16F, webGL.RGBA, HALF_FLOAT_TEXTURE_TYPE);
            formatRG = getSupportedFormat(webGL.RG16F, webGL.RG, HALF_FLOAT_TEXTURE_TYPE);
            formatR = getSupportedFormat(webGL.R16F, webGL.RED, HALF_FLOAT_TEXTURE_TYPE);
        } else {
            formatRGBA = getSupportedFormat(webGL.RGBA, webGL.RGBA, HALF_FLOAT_TEXTURE_TYPE);
            formatRG = getSupportedFormat(webGL.RGBA, webGL.RGBA, HALF_FLOAT_TEXTURE_TYPE);
            formatR = getSupportedFormat(webGL.RGBA, webGL.RGBA, HALF_FLOAT_TEXTURE_TYPE);
        }

        /** Get Supported Format
         *  Using the specified internal format, we retrieve and return the desired color format to be
         *  rendered with
         *
         * @param internalFormat: A GLenum that specifies the color components within the texture
         * @param format: Another GLenum that specifies the format of the texel data.
         * @returns {{internalFormat: *, format: *}|null|({internalFormat, format}|null)}
         */
        function getSupportedFormat (internalFormat, format, type) {
            let isSupportRenderTextureFormat;
            let texture = webGL.createTexture();

            /* Set texture parameters */
            webGL.bindTexture(webGL.TEXTURE_2D, texture);
            webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MIN_FILTER, webGL.NEAREST);
            webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MAG_FILTER, webGL.NEAREST);
            webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_S, webGL.CLAMP_TO_EDGE);
            webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_T, webGL.CLAMP_TO_EDGE);

            /* Specify a 2D texture image */
            webGL.texImage2D(webGL.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

            /* Attach texture to frame buffer */
            let fbo = webGL.createFramebuffer();
            webGL.bindFramebuffer(webGL.FRAMEBUFFER, fbo);
            webGL.framebufferTexture2D(webGL.FRAMEBUFFER, webGL.COLOR_ATTACHMENT0, webGL.TEXTURE_2D, texture, 0);

            /* Check if current format is supported */
            const status = webGL.checkFramebufferStatus(webGL.FRAMEBUFFER);
            isSupportRenderTextureFormat = status === webGL.FRAMEBUFFER_COMPLETE;

            /* If not supported use fallback format, until we have no fallback */
            if (!isSupportRenderTextureFormat) {
                switch (internalFormat) {
                    case webGL.R16F:
                        return getSupportedFormat(webGL.RG16F, webGL.RG, type);
                    case webGL.RG16F:
                        return getSupportedFormat(webGL.RGBA16F, webGL.RGBA, type);
                    default:
                        return null;
                }
            }

            return { internalFormat, format };
        }

        return {
            formatRGBA,
            formatRG,
            formatR,

            halfFloatTexType: HALF_FLOAT_TEXTURE_TYPE,
            supportLinearFiltering
        };
    }

    /**
     *  Compile Shader:
     *  Makes a new webGL shader of type `type` using the provided GLSL source. The `type` is either of
     *  `VERTEX_SHADER` or `FRAGMENT_SHADER`
     *
     * @param type: Passed to `createShader` to define the shader type
     * @param source: A GLSL source script, used to define the shader properties
     * @returns {WebGLShader}: A webGL shader of the parameterized type and source
     */
    function compileShader (type, source) {
        /* Create shader, link the source, and compile the GLSL*/
        const shader = webGL.createShader(type);
        webGL.shaderSource(shader, source);
        webGL.compileShader(shader);

        /* TODO: Finish error checking */
        if (!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS))
            throw webGL.getShaderInfoLog(shader);

        return shader;
    }

    /**
     *  Form Shader Programs:
     *  Assembles shaders into a webGl program we can use to write to our context
     *
     * @param supportLinearFiltering: A bool letting us know if we support linear filtering
     * @returns {{displayBloomProgram: GLProgram, vorticityProgram: GLProgram, displayShadingProgram: GLProgram,
     * displayBloomShadingProgram: GLProgram, gradientSubtractProgram: GLProgram, advectionProgram: GLProgram,
     * bloomBlurProgram: GLProgram, colorProgram: GLProgram, divergenceProgram: GLProgram, clearProgram: GLProgram,
     * splatProgram: GLProgram, displayProgram: GLProgram, bloomPreFilterProgram: GLProgram, curlProgram: GLProgram,
     * bloomFinalProgram: GLProgram, pressureProgram: GLProgram, backgroundProgram: GLProgram}}: Programs used to
     * render shaders
     *
     */
    function formShaderPrograms(supportLinearFiltering){
        return {
            clearProgram: new GLProgram(SHADER.baseVertex, SHADER.clear, webGL),
            colorProgram: new GLProgram(SHADER.baseVertex, SHADER.color, webGL),
            backgroundProgram: new GLProgram(SHADER.baseVertex, SHADER.background, webGL),
            displayProgram: new GLProgram(SHADER.baseVertex, SHADER.display, webGL),
            displayBloomProgram: new GLProgram(SHADER.baseVertex, SHADER.displayBloom, webGL),
            displayShadingProgram: new GLProgram(SHADER.baseVertex, SHADER.displayShading, webGL),
            displayBloomShadingProgram: new GLProgram(SHADER.baseVertex, SHADER.displayBloomShading, webGL),
            bloomPreFilterProgram: new GLProgram(SHADER.baseVertex, SHADER.bloomPreFilter, webGL),
            bloomBlurProgram: new GLProgram(SHADER.baseVertex, SHADER.bloomBlur, webGL),
            bloomFinalProgram: new GLProgram(SHADER.baseVertex, SHADER.bloomFinal, webGL),
            splatProgram: new GLProgram(SHADER.baseVertex, SHADER.splat, webGL),
            advectionProgram: new GLProgram(SHADER.baseVertex, supportLinearFiltering ? SHADER.advection : SHADER.advectionManualFiltering, webGL),
            divergenceProgram: new GLProgram(SHADER.baseVertex, SHADER.divergence, webGL),
            curlProgram: new GLProgram(SHADER.baseVertex, SHADER.curl, webGL),
            vorticityProgram: new GLProgram(SHADER.baseVertex, SHADER.vorticity, webGL),
            pressureProgram: new GLProgram(SHADER.baseVertex, SHADER.pressure, webGL),
            gradientSubtractProgram: new GLProgram(SHADER.baseVertex, SHADER.gradientSubtract, webGL)
        };
    }

    return {
        programs: programs,
        webGL: webGL,
        colorFormats: colorFormats,
        pointers: pointers
    }
}

export function activator(canvas, webGL, colorFormat, PROGRAMS, pointers) {
    if(active) {
        let nPointers = [];
        nPointers.push( new Pointer() );
        pointers = nPointers;
    }

    active = true;

    /* TODO: Retrieve haul style */
    const PARAMS = defaults.behavior;

    let bloomFrameBuffers = [];
    let splatStack = [];

    let simWidth;
    let simHeight;
    let dyeWidth;
    let dyeHeight;
    let density;
    let velocity;
    let divergence;
    let curl;
    let pressure;
    let bloom;

    const blit = (() => {
        webGL.bindBuffer(webGL.ARRAY_BUFFER, webGL.createBuffer());
        webGL.bufferData(webGL.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), webGL.STATIC_DRAW);

        webGL.bindBuffer(webGL.ELEMENT_ARRAY_BUFFER, webGL.createBuffer());
        webGL.bufferData(webGL.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), webGL.STATIC_DRAW);

        webGL.vertexAttribPointer(0, 2, webGL.FLOAT, false, 0, 0);
        webGL.enableVertexAttribArray(0);

        return (destination) => {
            webGL.bindFramebuffer(webGL.FRAMEBUFFER, destination);
            webGL.drawElements(webGL.TRIANGLES, 6, webGL.UNSIGNED_SHORT, 0);
        }
    })();

    /** Dithering Texture
     *  Initialize fluid overlay/dither
     *
     * @type {{texture: WebGLTexture, width: number, attach(*): *, height: number}}
     */
    let ditheringTexture = PARAMS.embedded_dither ? createTextureAsync(dither.default) : createTextureAsync(ditherURL);

    /* Initialize Fluid */
    init();
    multipleSplats(Math.random() * 20 + 5);

    /* Game Loop */
    let lastColorChangeTime = Date.now();
    update();
    /* Game Loop */

    /**
     * Initialize Fluid
     *  Prepares frame buffers for rendering
     *
     */
    function init() {
        /* Color Formats */
        const texType = colorFormat.halfFloatTexType;
        const rgba = colorFormat.formatRGBA;
        const rg = colorFormat.formatRG;
        const r = colorFormat.formatR;
        const filtering = colorFormat.supportLinearFiltering ? webGL.LINEAR : webGL.NEAREST;

        /* Set simulation and pointer width and height */
        let simRes = getResolution(PARAMS.sim_resolution);
        let dyeRes = getResolution(PARAMS.dye_resolution);
        let bloomRes = getResolution(PARAMS.bloom_resolution);

        simWidth = simRes.width;
        simHeight = simRes.height;
        dyeWidth = dyeRes.width;
        dyeHeight = dyeRes.height;

        /* Density, Velocity, and Bloom Double Frame Buffers */
        density = !density ?
            createDoubleFBO(dyeWidth, dyeHeight, rgba.internalFormat, rgba.format, texType, filtering) :
            resizeDoubleFBO(density, dyeWidth, dyeHeight, rgba.internalFormat, rgba.format, texType, filtering);
        velocity = !velocity ?
            createDoubleFBO(simWidth, simHeight, rg.internalFormat, rg.format, texType, filtering) :
            resizeDoubleFBO(velocity, simWidth, simHeight, rg.internalFormat, rg.format, texType, filtering);

        bloom = createFBO(bloomRes.width, bloomRes.height, rgba.internalFormat, rgba.format, texType, filtering);

        /* Divergence, Curl, and Pressure Frame Buffers */
        divergence = createFBO(simWidth, simHeight, r.internalFormat, r.format, texType, webGL.NEAREST);
        curl = createFBO(simWidth, simHeight, r.internalFormat, r.format, texType, webGL.NEAREST);
        pressure = createDoubleFBO(simWidth, simHeight, r.internalFormat, r.format, texType, webGL.NEAREST);

        /* Populate bloom's frame buffer stack by iterating through bloom iterations
        *  Each iteration, we offset the scale linearly at a constant rate*/
        bloomFrameBuffers.length = 0;
        for (let i = 0; i < PARAMS.bloom_iterations; i++) {
            /* Offset scale by a factor of 1 plus our current iteration*/
            let width = bloomRes.width >> (i + 1);
            let height = bloomRes.height >> (i + 1);

            /* Don't create frame buffer */
            if (width < 2 || height < 2) break;

            /* Create Frame Buffer for Bloom iterations */
            let fbo = createFBO(width, height, rgba.internalFormat, rgba.format, texType, filtering);
            bloomFrameBuffers.push(fbo);
        }
    }

    /**
     * Create Double Frame Buffer Object
     *  Creates an object with 2 frame buffers, one for reads and one for writes
     *
     * @param w: Width
     * @param h: Height
     * @param internalFormat: Internal color formats
     * @param format: Color format
     * @param type: Texture type
     * @param param: Extra parameters
     */
    function createDoubleFBO(w, h, internalFormat, format, type, param) {
        /* Create frame buffer objects */
        let fbo1 = createFBO(w, h, internalFormat, format, type, param);
        let fbo2 = createFBO(w, h, internalFormat, format, type, param);

        return {
            /* Get and set Buffer Data */
            get read() {
                return fbo1;
            },
            set read(value) {
                fbo1 = value;
            },
            get write() {
                return fbo2;
            },
            set write(value) {
                fbo2 = value;
            },

            /* Swap data between buffers */
            swap() {
                let temp = fbo1;
                fbo1 = fbo2;
                fbo2 = temp;
            }
        }
    }

    function createFBO(w, h, internalFormat, format, type, param) {
        webGL.activeTexture(webGL.TEXTURE0);
        let texture = webGL.createTexture();
        webGL.bindTexture(webGL.TEXTURE_2D, texture);
        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MIN_FILTER, param);
        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MAG_FILTER, param);
        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_S, webGL.CLAMP_TO_EDGE);
        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_T, webGL.CLAMP_TO_EDGE);
        webGL.texImage2D(webGL.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

        let fbo = webGL.createFramebuffer();
        webGL.bindFramebuffer(webGL.FRAMEBUFFER, fbo);
        webGL.framebufferTexture2D(webGL.FRAMEBUFFER, webGL.COLOR_ATTACHMENT0, webGL.TEXTURE_2D, texture, 0);
        webGL.viewport(0, 0, w, h);
        webGL.clear(webGL.COLOR_BUFFER_BIT);

        return {
            texture,
            fbo,
            width: w,
            height: h,
            attach(id) {
                webGL.activeTexture(webGL.TEXTURE0 + id);
                webGL.bindTexture(webGL.TEXTURE_2D, texture);
                return id;
            }
        };
    }

    function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
        target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
        target.write = createFBO(w, h, internalFormat, format, type, param);
        return target;
    }

    function resizeFBO(target, w, h, internalFormat, format, type, param) {
        let newFBO = createFBO(w, h, internalFormat, format, type, param);
        PROGRAMS.clearProgram.bind();
        webGL.uniform1i(PROGRAMS.clearProgram.uniforms.uTexture, target.attach(0));
        webGL.uniform1f(PROGRAMS.clearProgram.uniforms.value, 1);
        blit(newFBO.fbo);
        return newFBO;
    }

    function createTextureAsync(url) {
        let texture = webGL.createTexture();
        webGL.bindTexture(webGL.TEXTURE_2D, texture);
        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MIN_FILTER, webGL.LINEAR);
        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MAG_FILTER, webGL.LINEAR);
        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_S, webGL.REPEAT);
        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_T, webGL.REPEAT);
        webGL.texImage2D(webGL.TEXTURE_2D, 0, webGL.RGB, 1, 1, 0, webGL.RGB, webGL.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));

        let obj = {
            texture,
            width: 1,
            height: 1,
            attach(id) {
                webGL.activeTexture(webGL.TEXTURE0 + id);
                webGL.bindTexture(webGL.TEXTURE_2D, texture);
                return id;
            }
        };

        let image = new Image();

        image.src = url;

        image.onload = () => {
            obj.width = image.width;
            obj.height = image.height;
            webGL.bindTexture(webGL.TEXTURE_2D, texture);
            webGL.texImage2D(webGL.TEXTURE_2D, 0, webGL.RGB, webGL.RGB, webGL.UNSIGNED_BYTE, image);
        };

        return obj;
    }

    function update() {
        resizeCanvas();
        input();
        if (!PARAMS.paused)
            step(0.016);
        render(null);
        let callback = requestAnimationFrame(update);

        // /* Destroys if Deactivated */
        // if (cancelled.is) {
        //     webGL.clear(webGL.COLOR_BUFFER_BIT);
        //     cancelAnimationFrame(callback);
        // }
    }

    function input() {
        if (splatStack.length > 0)
            multipleSplats(splatStack.pop());

        for (let i = 0; i < pointers.length; i++) {
            const p = pointers[i];
            if (p.moved) {
                splat(p.x, p.y, p.dx, p.dy, p.color);
                if(i !== 1)
                    p.moved = false;
            }
        }

        if (!PARAMS.multi_color)
            return;

        if (lastColorChangeTime + 100 < Date.now()) {
            lastColorChangeTime = Date.now();
            for (let i = 0; i < pointers.length; i++) {
                const p = pointers[i];
                p.color = generateColor();
            }
        }
    }

    function step(dt) {
        webGL.disable(webGL.BLEND);
        webGL.viewport(0, 0, simWidth, simHeight);

        PROGRAMS.curlProgram.bind();
        webGL.uniform2f(PROGRAMS.curlProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
        webGL.uniform1i(PROGRAMS.curlProgram.uniforms.uVelocity, velocity.read.attach(0));
        blit(curl.fbo);

        PROGRAMS.vorticityProgram.bind();
        webGL.uniform2f(PROGRAMS.vorticityProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
        webGL.uniform1i(PROGRAMS.vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
        webGL.uniform1i(PROGRAMS.vorticityProgram.uniforms.uCurl, curl.attach(1));
        webGL.uniform1f(PROGRAMS.vorticityProgram.uniforms.curl, PARAMS.curl);
        webGL.uniform1f(PROGRAMS.vorticityProgram.uniforms.dt, dt);
        blit(velocity.write.fbo);
        velocity.swap();

        PROGRAMS.divergenceProgram.bind();
        webGL.uniform2f(PROGRAMS.divergenceProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
        webGL.uniform1i(PROGRAMS.divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
        blit(divergence.fbo);

        PROGRAMS.clearProgram.bind();
        webGL.uniform1i(PROGRAMS.clearProgram.uniforms.uTexture, pressure.read.attach(0));
        webGL.uniform1f(PROGRAMS.clearProgram.uniforms.value, PARAMS.pressure);
        blit(pressure.write.fbo);
        pressure.swap();

        PROGRAMS.pressureProgram.bind();
        webGL.uniform2f(PROGRAMS.pressureProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
        webGL.uniform1i(PROGRAMS.pressureProgram.uniforms.uDivergence, divergence.attach(0));
        for (let i = 0; i < PARAMS.pressure_iteration; i++) {
            webGL.uniform1i(PROGRAMS.pressureProgram.uniforms.uPressure, pressure.read.attach(1));
            blit(pressure.write.fbo);
            pressure.swap();
        }

        PROGRAMS.gradientSubtractProgram.bind();
        webGL.uniform2f(PROGRAMS.gradientSubtractProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
        webGL.uniform1i(PROGRAMS.gradientSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
        webGL.uniform1i(PROGRAMS.gradientSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
        blit(velocity.write.fbo);
        velocity.swap();

        PROGRAMS.advectionProgram.bind();
        webGL.uniform2f(PROGRAMS.advectionProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
        if (!colorFormat.supportLinearFiltering)
            webGL.uniform2f(PROGRAMS.advectionProgram.uniforms.dyeTexelSize, 1.0 / simWidth, 1.0 / simHeight);
        let velocityId = velocity.read.attach(0);
        webGL.uniform1i(PROGRAMS.advectionProgram.uniforms.uVelocity, velocityId);
        webGL.uniform1i(PROGRAMS.advectionProgram.uniforms.uSource, velocityId);
        webGL.uniform1f(PROGRAMS.advectionProgram.uniforms.dt, dt);
        webGL.uniform1f(PROGRAMS.advectionProgram.uniforms.dissipation, PARAMS.velocity);
        blit(velocity.write.fbo);
        velocity.swap();

        webGL.viewport(0, 0, dyeWidth, dyeHeight);

        if (!colorFormat.supportLinearFiltering)
            webGL.uniform2f(PROGRAMS.advectionProgram.uniforms.dyeTexelSize, 1.0 / dyeWidth, 1.0 / dyeHeight);
        webGL.uniform1i(PROGRAMS.advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
        webGL.uniform1i(PROGRAMS.advectionProgram.uniforms.uSource, density.read.attach(1));
        webGL.uniform1f(PROGRAMS.advectionProgram.uniforms.dissipation, PARAMS.dissipation);
        blit(density.write.fbo);
        density.swap();
    }

    function render(target) {
        if (PARAMS.render_bloom)
            applyBloom(density.read, bloom);

        if (target == null || !PARAMS.transparent) {
            webGL.blendFunc(webGL.ONE, webGL.ONE_MINUS_SRC_ALPHA);
            webGL.enable(webGL.BLEND);
        } else {
            webGL.disable(webGL.BLEND);
        }

        let width = target == null ? webGL.drawingBufferWidth : dyeWidth;
        let height = target == null ? webGL.drawingBufferHeight : dyeHeight;

        webGL.viewport(0, 0, width, height);

        if (!PARAMS.transparent) {
            PROGRAMS.colorProgram.bind();
            let bc = PARAMS.background_color;
            webGL.uniform4f(PROGRAMS.colorProgram.uniforms.color, bc.r / 255, bc.g / 255, bc.b / 255, 1);
            blit(target);
        }

        if (target == null && PARAMS.transparent) {
            PROGRAMS.backgroundProgram.bind();
            webGL.uniform1f(PROGRAMS.backgroundProgram.uniforms.aspectRatio, canvas.width / canvas.height);
            blit(null);
        }

        if (PARAMS.render_shaders) {
            let program = PARAMS.render_bloom ? PROGRAMS.displayBloomShadingProgram : PROGRAMS.displayShadingProgram;
            program.bind();
            webGL.uniform2f(program.uniforms.texelSize, 1.0 / width, 1.0 / height);
            webGL.uniform1i(program.uniforms.uTexture, density.read.attach(0));
            if (PARAMS.render_bloom) {
                webGL.uniform1i(program.uniforms.uBloom, bloom.attach(1));
                webGL.uniform1i(program.uniforms.uDithering, ditheringTexture.attach(2));
                let scale = getTextureScale(ditheringTexture, width, height);
                webGL.uniform2f(program.uniforms.ditherScale, scale.x, scale.y);
            }
        } else {
            let program = PARAMS.render_bloom ? PROGRAMS.displayBloomProgram : PROGRAMS.displayProgram;
            program.bind();
            webGL.uniform1i(program.uniforms.uTexture, density.read.attach(0));
            if (PARAMS.render_bloom) {
                webGL.uniform1i(program.uniforms.uBloom, bloom.attach(1));
                webGL.uniform1i(program.uniforms.uDithering, ditheringTexture.attach(2));
                let scale = getTextureScale(ditheringTexture, width, height);
                webGL.uniform2f(program.uniforms.ditherScale, scale.x, scale.y);
            }
        }

        blit(target);
    }

    function applyBloom(source, destination) {
        if (bloomFrameBuffers.length < 2)
            return;

        let last = destination;

        webGL.disable(webGL.BLEND);
        PROGRAMS.bloomPreFilterProgram.bind();
        let knee = PARAMS.threshold * PARAMS.soft_knee + 0.0001;
        let curve0 = PARAMS.threshold - knee;
        let curve1 = knee * 2;
        let curve2 = 0.25 / knee;
        webGL.uniform3f(PROGRAMS.bloomPreFilterProgram.uniforms.curve, curve0, curve1, curve2);
        webGL.uniform1f(PROGRAMS.bloomPreFilterProgram.uniforms.threshold, PARAMS.threshold);
        webGL.uniform1i(PROGRAMS.bloomPreFilterProgram.uniforms.uTexture, source.attach(0));
        webGL.viewport(0, 0, last.width, last.height);
        blit(last.fbo);

        PROGRAMS.bloomBlurProgram.bind();
        for (let i = 0; i < bloomFrameBuffers.length; i++) {
            let dest = bloomFrameBuffers[i];
            webGL.uniform2f(PROGRAMS.bloomBlurProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
            webGL.uniform1i(PROGRAMS.bloomBlurProgram.uniforms.uTexture, last.attach(0));
            webGL.viewport(0, 0, dest.width, dest.height);
            blit(dest.fbo);
            last = dest;
        }

        webGL.blendFunc(webGL.ONE, webGL.ONE);
        webGL.enable(webGL.BLEND);

        for (let i = bloomFrameBuffers.length - 2; i >= 0; i--) {
            let baseTex = bloomFrameBuffers[i];
            webGL.uniform2f(PROGRAMS.bloomBlurProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
            webGL.uniform1i(PROGRAMS.bloomBlurProgram.uniforms.uTexture, last.attach(0));
            webGL.viewport(0, 0, baseTex.width, baseTex.height);
            blit(baseTex.fbo);
            last = baseTex;
        }

        webGL.disable(webGL.BLEND);
        PROGRAMS.bloomFinalProgram.bind();
        webGL.uniform2f(PROGRAMS.bloomFinalProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
        webGL.uniform1i(PROGRAMS.bloomFinalProgram.uniforms.uTexture, last.attach(0));
        webGL.uniform1f(PROGRAMS.bloomFinalProgram.uniforms.intensity, PARAMS.intensity);
        webGL.viewport(0, 0, destination.width, destination.height);
        blit(destination.fbo);
    }

    function splat(x, y, dx, dy, color) {
        webGL.viewport(0, 0, simWidth, simHeight);
        PROGRAMS.splatProgram.bind();
        webGL.uniform1i(PROGRAMS.splatProgram.uniforms.uTarget, velocity.read.attach(0));
        webGL.uniform1f(PROGRAMS.splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
        webGL.uniform2f(PROGRAMS.splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
        webGL.uniform3f(PROGRAMS.splatProgram.uniforms.color, dx, -dy, 1.0);
        webGL.uniform1f(PROGRAMS.splatProgram.uniforms.radius, PARAMS.emitter_size / 100.0);
        blit(velocity.write.fbo);
        velocity.swap();

        webGL.viewport(0, 0, dyeWidth, dyeHeight);
        webGL.uniform1i(PROGRAMS.splatProgram.uniforms.uTarget, density.read.attach(0));
        webGL.uniform3f(PROGRAMS.splatProgram.uniforms.color, color.r, color.g, color.b);
        blit(density.write.fbo);
        density.swap();
    }

    function multipleSplats(amount) {
        let color = {
            r: 255,
            b: 0,
            g: 0
        };

        splat(500, 500, 100, 0, color);

    }

    function resizeCanvas() {
        if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            init();
        }
    }

    function generateColor() {
        let c = HSVtoRGB(Math.random(), 1.0, 1.0);
        c.r *= 0.15;
        c.g *= 0.15;
        c.b *= 0.15;
        return c;
    }

    function HSVtoRGB(h, s, v) {
        let r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }

        return {
            r,
            g,
            b
        };
    }

    function getResolution(resolution) {
        let aspectRatio = webGL.drawingBufferWidth / webGL.drawingBufferHeight;
        if (aspectRatio < 1)
            aspectRatio = 1.0 / aspectRatio;

        let max = Math.round(resolution * aspectRatio);
        let min = Math.round(resolution);

        if (webGL.drawingBufferWidth > webGL.drawingBufferHeight)
            return {width: max, height: min};
        else
            return {width: min, height: max};
    }

    function getTextureScale(texture, width, height) {
        return {
            x: width / texture.width,
            y: height / texture.height
        };
    }

    canvas.addEventListener('mousemove', e => {
        pointers[0].moved = pointers[0].down;
        pointers[0].dx = (e.offsetX - pointers[0].x) * 5.0;
        pointers[0].dy = (e.offsetY - pointers[0].y) * 5.0;
        pointers[0].x = e.offsetX;
        pointers[0].y = e.offsetY;
    });

    canvas.addEventListener('mousedown', () => {
        pointers[0].down = true;
        pointers[0].color = generateColor();
    });

    window.addEventListener('mouseup', () => {
        pointers[0].down = false;
    });

    window.addEventListener('keydown', e => {
        if (e.code === 'KeyP')
            PARAMS.paused = !PARAMS.paused;
        if (e.key === ' ')
            splatStack.push(parseInt(Math.random() * 20) + 5);
    });
}

/**
 * Set Dither URL
 *  Sets the URL to an image to be used for dithering.
 *
 * @param url: Path to dither in root directory.
 */
export function setDitherURL(url) { ditherURL = url }

/**
 * A WebGL program with the given vertex and fragment shaders.
 */
class GLProgram {
    constructor (vertexShader, fragmentShader, webGL) {
        this.uniforms = {};
        this.webGL = webGL;
        this.program = webGL.createProgram();

        // Create program from shader
        webGL.attachShader(this.program, vertexShader);
        webGL.attachShader(this.program, fragmentShader);
        webGL.linkProgram(this.program);

        // Check linking status
        if (!webGL.getProgramParameter(this.program, webGL.LINK_STATUS))
            throw webGL.getProgramInfoLog(this.program);

        // Cache uniforms to class
        const uniformCount = webGL.getProgramParameter(this.program, webGL.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            const uniformName = webGL.getActiveUniform(this.program, i).name;
            this.uniforms[uniformName] = webGL.getUniformLocation(this.program, uniformName);
        }
    }

    /**
     * Sets shader program as part of current rendering state.
     */
    bind () {
        this.webGL.useProgram(this.program);
    }
}

class Pointer {
    constructor () {
        /** Identifier for the pointer object
         *
         *  @type {number} valid IDs are always either zero or a positive integer (-1 is invalid and should
         *  be managed upon creation of a new pointer object.)
         */
        this.id = -1;

        /** Horizontal (x) and vertical (y) position of the pointer
         *
         *  @type {number}
         */
        this.x = 0;
        this.y = 0;

        /** Velocity data describing the positional change in the horizontal (x) and vertical (y) axis of
         *  this pointer
         *
         * @type {number}
         */
        this.dx = 0;
        this.dy = 0;

        /** Boolean data member used to store whether or not the pointer is in a clicked state and/or a
         *  moving state
         *
         *  @type {boolean}
         */
        this.down = false;
        this.moved = false;

        /** The color the pointer will render as
         *
         * @type {number[]}
         */
        this.color = [30, 0, 300];
    }
}
