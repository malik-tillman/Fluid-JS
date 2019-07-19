/* Refs
https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
 */
'use strict';

export class Fluid {
    constructor(canvas){
        this.deactivated = { is: false };
        this.activated = { is: false };

        this.PARAMS = {
            sim_resolution: 128,
            dye_resolution: 512,
            paused: false,
            clamp_values: true,

            /* Fluid Dissipation Behaviors*/
            dissipation: .99,
            velocity: .99,
            pressure: 1,
            pressure_iteration: 10,

            /* Fluid Color */
            fluid_color: [
                [0, 0, 0],
                [.4, .2, 0]
            ],

            /* Characteristics */
            curl: 0,
            emitter_size: 0.5,
            render_shaders: true,
            multi_color: true,

            /* Bloom */
            render_bloom: false,
            bloom_resolution: 256*4,
            bloom_iterations: 1.0,
            intensity: 0.6,
            threshold: 0.3,
            soft_knee: 1.0,

            /* Background */
            background_color: { r: 20, g: 20, b: 20 },
            transparent: false
        };

        this.DRAWING_PARAMS = {
            alpha: true,
            depth: false,
            stencil: false,
            antialias: false,
            preserveDrawingBuffer: false,
            powerPreference: "default"
        };

        this.SHADER_SOURCE = {
            blank: ``,
            vertex: `
                  precision highp float;
              
                  attribute vec2 aPosition;
                  varying vec2 vUv;
                  varying vec2 vL;
                  varying vec2 vR;
                  varying vec2 vT;
                  varying vec2 vB;
                  uniform vec2 texelSize;
              
                  void main () {
                      vUv = aPosition * 0.5 + 0.5;
                      vL = vUv - vec2(texelSize.x, 0.0);
                      vR = vUv + vec2(texelSize.x, 0.0);
                      vT = vUv + vec2(0.0, texelSize.y);
                      vB = vUv - vec2(0.0, texelSize.y);
                      gl_Position = vec4(aPosition, 0.0, 1.0);
                  }`,
            clear: `
                  precision mediump float;
                  precision mediump sampler2D;
              
                  varying highp vec2 vUv;
                  uniform sampler2D uTexture;
                  uniform float value;
              
                  void main () {
                      gl_FragColor = value * texture2D(uTexture, vUv);
                  }
              `,
            color: `
                  precision mediump float;
              
                  uniform vec4 color;
              
                  void main () {
                      gl_FragColor = color;
                  }
              `,
            background: `
                  precision highp float;
                  precision highp sampler2D;
              
                  varying vec2 vUv;
                  uniform sampler2D uTexture;
                  uniform float aspectRatio;
              
                  #define SCALE 25.0
              
                  void main () {
                      vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
                      float v = mod(uv.x + uv.y, 2.0);
                      v = v * 0.1 + 0.8;
                      gl_FragColor = vec4(vec3(v), 1.0);
                  }
              `,
            pictureBackground: ` 
                    void main() { 
                        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); 
                    } 
            `,
            display: `
                  precision highp float;
                  precision highp sampler2D;
              
                  varying vec2 vUv;
                  uniform sampler2D uTexture;
              
                  void main () {
                      vec3 C = texture2D(uTexture, vUv).rgb;
                      float a = max(C.r, max(C.g, C.b));
                      gl_FragColor = vec4(C, a);
                  }
              `,
            displayBloom: `
          precision highp float;
          precision highp sampler2D;
      
          varying vec2 vUv;
          uniform sampler2D uTexture;
          uniform sampler2D uBloom;
          uniform sampler2D uDithering;
          uniform vec2 ditherScale;
      
          void main () {
              vec3 C = texture2D(uTexture, vUv).rgb;
              vec3 bloom = texture2D(uBloom, vUv).rgb;
              vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;
              noise = noise * 2.0 - 1.0;
              bloom += noise / 800.0;
              bloom = pow(bloom.rgb, vec3(1.0 / 2.2));
              C += bloom;
              float a = max(C.r, max(C.g, C.b));
              gl_FragColor = vec4(C, a);
          }
      `,
            displayShading: `
          precision highp float;
          precision highp sampler2D;
      
          varying vec2 vUv;
          varying vec2 vL;
          varying vec2 vR;
          varying vec2 vT;
          varying vec2 vB;
          uniform sampler2D uTexture;
          uniform vec2 texelSize;
      
          void main () {
              vec3 L = texture2D(uTexture, vL).rgb;
              vec3 R = texture2D(uTexture, vR).rgb;
              vec3 T = texture2D(uTexture, vT).rgb;
              vec3 B = texture2D(uTexture, vB).rgb;
              vec3 C = texture2D(uTexture, vUv).rgb;
      
              float dx = length(R) - length(L);
              float dy = length(T) - length(B);
      
              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);
      
              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              C.rgb *= diffuse;
      
              float a = max(C.r, max(C.g, C.b));
              gl_FragColor = vec4(C, a);
          }
      `,
            displayBloomShading: `
          precision highp float;
          precision highp sampler2D;
      
          varying vec2 vUv;
          varying vec2 vL;
          varying vec2 vR;
          varying vec2 vT;
          varying vec2 vB;
          uniform sampler2D uTexture;
          uniform sampler2D uBloom;
          uniform sampler2D uDithering;
          uniform vec2 ditherScale;
          uniform vec2 texelSize;
      
          void main () {
              vec3 L = texture2D(uTexture, vL).rgb;
              vec3 R = texture2D(uTexture, vR).rgb;
              vec3 T = texture2D(uTexture, vT).rgb;
              vec3 B = texture2D(uTexture, vB).rgb;
              vec3 C = texture2D(uTexture, vUv).rgb;
      
              float dx = length(R) - length(L);
              float dy = length(T) - length(B);
      
              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);
      
              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              C *= diffuse;
      
              vec3 bloom = texture2D(uBloom, vUv).rgb;
              vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;
              noise = noise * 2.0 - 1.0;
              bloom += noise / 800.0;
              bloom = pow(bloom.rgb, vec3(1.0 / 2.2));
              C += bloom;
      
              float a = max(C.r, max(C.g, C.b));
              gl_FragColor = vec4(C, a);
          }
      `,
            bloomPreFilter: `
          precision mediump float;
          precision mediump sampler2D;
      
          varying vec2 vUv;
          uniform sampler2D uTexture;
          uniform vec3 curve;
          uniform float threshold;
      
          void main () {
              vec3 c = texture2D(uTexture, vUv).rgb;
              float br = max(c.r, max(c.g, c.b));
              float rq = clamp(br - curve.x, 0.0, curve.y);
              rq = curve.z * rq * rq;
              c *= max(rq, br - threshold) / max(br, 0.0001);
              gl_FragColor = vec4(c, 0.0);
          }
      `,
            bloomBlur: `
          precision mediump float;
          precision mediump sampler2D;
      
          varying vec2 vL;
          varying vec2 vR;
          varying vec2 vT;
          varying vec2 vB;
          uniform sampler2D uTexture;
      
          void main () {
              vec4 sum = vec4(0.0);
              sum += texture2D(uTexture, vL);
              sum += texture2D(uTexture, vR);
              sum += texture2D(uTexture, vT);
              sum += texture2D(uTexture, vB);
              sum *= 0.25;
              gl_FragColor = sum;
          }
      `,
            bloomFinal: `
          precision mediump float;
          precision mediump sampler2D;
      
          varying vec2 vL;
          varying vec2 vR;
          varying vec2 vT;
          varying vec2 vB;
          uniform sampler2D uTexture;
          uniform float intensity;
      
          void main () {
              vec4 sum = vec4(0.0);
              sum += texture2D(uTexture, vL);
              sum += texture2D(uTexture, vR);
              sum += texture2D(uTexture, vT);
              sum += texture2D(uTexture, vB);
              sum *= 0.25;
              gl_FragColor = sum * intensity;
          }
      `,
            splat: `
          precision highp float;
          precision highp sampler2D;
      
          varying vec2 vUv;
          uniform sampler2D uTarget;
          uniform float aspectRatio;
          uniform vec3 color;
          uniform vec2 point;
          uniform float radius;
      
          void main () {
              vec2 p = vUv - point.xy;
              p.x *= aspectRatio;
              vec3 splat = exp(-dot(p, p) / radius) * color;
              vec3 base = texture2D(uTarget, vUv).xyz;
              gl_FragColor = vec4(base + splat, 1.0);
          }
      `,
            advectionManualFiltering: `
          precision highp float;
          precision highp sampler2D;
      
          varying vec2 vUv;
          uniform sampler2D uVelocity;
          uniform sampler2D uSource;
          uniform vec2 texelSize;
          uniform vec2 dyeTexelSize;
          uniform float dt;
          uniform float dissipation;
      
          vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
              vec2 st = uv / tsize - 0.5;
      
              vec2 iuv = floor(st);
              vec2 fuv = fract(st);
      
              vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
              vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
              vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
              vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
      
              return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
          }
      
          void main () {
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);
              gl_FragColor.a = 1.0;
          }
      `,
            advection: `
          precision highp float;
          precision highp sampler2D;
      
          varying vec2 vUv;
          uniform sampler2D uVelocity;
          uniform sampler2D uSource;
          uniform vec2 texelSize;
          uniform float dt;
          uniform float dissipation;
      
          void main () {
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              gl_FragColor = dissipation * texture2D(uSource, coord);
              gl_FragColor.a = 1.0;
          }
      `,
            divergence: `
          precision mediump float;
          precision mediump sampler2D;
      
          varying highp vec2 vUv;
          varying highp vec2 vL;
          varying highp vec2 vR;
          varying highp vec2 vT;
          varying highp vec2 vB;
          uniform sampler2D uVelocity;
      
          void main () {
              float L = texture2D(uVelocity, vL).x;
              float R = texture2D(uVelocity, vR).x;
              float T = texture2D(uVelocity, vT).y;
              float B = texture2D(uVelocity, vB).y;
      
              vec2 C = texture2D(uVelocity, vUv).xy;
              if (vL.x < 0.0) { L = -C.x; }
              if (vR.x > 1.0) { R = -C.x; }
              if (vT.y > 1.0) { T = -C.y; }
              if (vB.y < 0.0) { B = -C.y; }
      
              float div = 0.5 * (R - L + T - B);
              gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
          }
      `,
            curl: `
          precision mediump float;
          precision mediump sampler2D;
      
          varying highp vec2 vUv;
          varying highp vec2 vL;
          varying highp vec2 vR;
          varying highp vec2 vT;
          varying highp vec2 vB;
          uniform sampler2D uVelocity;
      
          void main () {
              float L = texture2D(uVelocity, vL).y;
              float R = texture2D(uVelocity, vR).y;
              float T = texture2D(uVelocity, vT).x;
              float B = texture2D(uVelocity, vB).x;
              float vorticity = R - L - T + B;
              gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
          }
      `,
            vorticity: `
          precision highp float;
          precision highp sampler2D;
      
          varying vec2 vUv;
          varying vec2 vL;
          varying vec2 vR;
          varying vec2 vT;
          varying vec2 vB;
          uniform sampler2D uVelocity;
          uniform sampler2D uCurl;
          uniform float curl;
          uniform float dt;
      
          void main () {
              float L = texture2D(uCurl, vL).x;
              float R = texture2D(uCurl, vR).x;
              float T = texture2D(uCurl, vT).x;
              float B = texture2D(uCurl, vB).x;
              float C = texture2D(uCurl, vUv).x;
      
              vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
              force /= length(force) + 0.0001;
              force *= curl * C;
              force.y *= -1.0;
      
              vec2 vel = texture2D(uVelocity, vUv).xy;
              gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
          }
      `,
            pressure: `
          precision mediump float;
          precision mediump sampler2D;
      
          varying highp vec2 vUv;
          varying highp vec2 vL;
          varying highp vec2 vR;
          varying highp vec2 vT;
          varying highp vec2 vB;
          uniform sampler2D uPressure;
          uniform sampler2D uDivergence;
      
          vec2 boundary (vec2 uv) {
              return uv;
              // uncomment if you use wrap or repeat texture mode
              // uv = min(max(uv, 0.0), 1.0);
              // return uv;
          }
      
          void main () {
              float L = texture2D(uPressure, boundary(vL)).x;
              float R = texture2D(uPressure, boundary(vR)).x;
              float T = texture2D(uPressure, boundary(vT)).x;
              float B = texture2D(uPressure, boundary(vB)).x;
              float C = texture2D(uPressure, vUv).x;
              float divergence = texture2D(uDivergence, vUv).x;
              float pressure = (L + R + B + T - divergence) * 0.25;
              gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
          }
      `,
            gradientSubtract: `
          precision mediump float;
          precision mediump sampler2D;
      
          varying highp vec2 vUv;
          varying highp vec2 vL;
          varying highp vec2 vR;
          varying highp vec2 vT;
          varying highp vec2 vB;
          uniform sampler2D uPressure;
          uniform sampler2D uVelocity;
      
          vec2 boundary (vec2 uv) {
              return uv;
              // uv = min(max(uv, 0.0), 1.0);
              // return uv;
          }
      
          void main () {
              float L = texture2D(uPressure, boundary(vL)).x;
              float R = texture2D(uPressure, boundary(vR)).x;
              float T = texture2D(uPressure, boundary(vT)).x;
              float B = texture2D(uPressure, boundary(vB)).x;
              vec2 velocity = texture2D(uVelocity, vUv).xy;
              velocity.xy -= vec2(R - L, T - B);
              gl_FragColor = vec4(velocity, 0.0, 1.0);
          }
      `
        };

        /* Set canvas to desired width and height
           TODO: Change to dynamic sizing  */
        canvas.width  = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        this.canvas   = canvas;

        this.initWebGL();
    }

    /**
     * Initiate WebGL Object
     *  Gets WebGL context and compiles shader programs.
     *
     */
    initWebGL() {
        this.deactivated.is = false;

        /* Add default pointer */
        let pointers = [];
        pointers.push( new Pointer() );
        this.pointers = pointers;

        /* Get webGL context */
        let webGL = canvas.getContext('webgl2', this.DRAWING_PARAMS);
        const isWebGL2 = !!webGL;
        if (!isWebGL2)
            webGL = canvas.getContext('webgl', this.DRAWING_PARAMS) || canvas.getContext('experimental-webgl', this.DRAWING_PARAMS);

        /* Get color formats */
        this.colorFormats = getFormats();

        /* Case support adjustments */
        if (isMobile())
            this.PARAMS.render_shaders = false;
        if (!this.colorFormats.supportLinearFiltering) {
            this.PARAMS.render_shaders = false;
            this.PARAMS.render_bloom = false;
        }

        /* Make our shaders and shader programs */
        const SHADER = {
            baseVertex               : compileShader(webGL.VERTEX_SHADER, this.SHADER_SOURCE.vertex),

            clear                    : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.clear),
            color                    : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.color),
            background               : compileShader(webGL.FRAGMENT_SHADER, this.PARAMS.transparent ? this.SHADER_SOURCE.pictureBackground : this.SHADER_SOURCE.background),
            display                  : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.display),
            displayBloom             : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.displayBloom),
            displayShading           : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.displayShading),
            displayBloomShading      : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.displayBloomShading),
            bloomPreFilter           : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.bloomPreFilter),
            bloomBlur                : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.bloomBlur),
            bloomFinal               : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.bloomFinal),
            splat                    : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.splat),
            advectionManualFiltering : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.advectionManualFiltering),
            advection                : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.advection),
            divergence               : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.divergence),
            curl                     : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.curl),
            vorticity                : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.vorticity),
            pressure                 : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.pressure),
            gradientSubtract         : compileShader(webGL.FRAGMENT_SHADER, this.SHADER_SOURCE.gradientSubtract)
        };
        this.programs = formShaderPrograms(this.colorFormats.supportLinearFiltering);

        this.webGL = webGL;

        /* Worker Classes and Functions */
        /**
         *  Pointer Class:
         *  Defines a new pointer with all default pointer properties
         *
         */
        function Pointer() {
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
    }

    /**
     * Activate Fluid Canvas
     *  Initiates WebGL fluid loop.
     *
     *  TODO: Finish commenting
     *
     */
    activate() {
        /* ********************************
            Reconstruct WebGL if activated:
               - After being deactivated
               - Activated when already active
         ******************************** */
        if(this.deactivated.is || this.activated.is)
            this.initWebGL();

        this.activated.is = true;

        /* TODO: Retrieve haul style */
        const cancelled = this.deactivated;
        const canvas = this.canvas;
        const webGL = this.webGL;
        const PARAMS = this.PARAMS;
        const colorFormat = this.colorFormats;
        const PROGRAMS = this.programs;

        let pointers = this.pointers;
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
        let ditheringTexture = createTextureAsync('dither.png');

        /* Initialize Fluid */
        init();
        multipleSplats(parseInt(Math.random() * 20) + 5);

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
            *  Each iteration, we offset the scale linearly */
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
            image.onload = () => {
                obj.width = image.width;
                obj.height = image.height;
                webGL.bindTexture(webGL.TEXTURE_2D, texture);
                webGL.texImage2D(webGL.TEXTURE_2D, 0, webGL.RGB, webGL.RGB, webGL.UNSIGNED_BYTE, image);
            };
            image.src = url;

            return obj;
        }

        function update() {
            resizeCanvas();
            input();
            if (!PARAMS.paused)
                step(0.020);
            render(null);
            let callback = requestAnimationFrame(update);

            /* Destroys if Deactivated */
            if (cancelled.is) {
                webGL.clear(webGL.COLOR_BUFFER_BIT);
                cancelAnimationFrame(callback);
            }
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

            // for (let i = 0; i < 100; i++){
            //     splat(500 + 5*i, 500, 100, 0, color);
            // }

            splat(500, 500, 100, 0, color);


            //splat(500, 500, 100, 0, color);
            //requestAnimationFrame(multipleSplats)
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
     * Deactivate Fluid Canvas
     *  Notifies active fluid canvas to clear buffers and erase fluid from call stack.
     *
     */
    deactivate(){
        this.deactivated.is = true;
    }

    /**
     * Reset Fluid Simulation
     *  Re-initializes WebGL context and activates simulation based on new context.
     *
     */
    reset() {
        this.initWebGL();
        this.activate();
    }

    /**
     * Map Fluid Behaviors
     *  Uses spread operators to add parameter values only in the places specified.
     *
     * @param params: specific parameter value.
     *
     */
    mapBehaviors(params) {
        this.PARAMS = {...this.PARAMS, ...params};
    }

    /**
     * Set Fluid as Background
     *  Pushes canvas back in z space and absolutely positions it.
     *
     * @param shouldSet: true sets it, false un-sets it. Defaults to true.
     *
     */
    setAsBackground(shouldSet = true) {
        /* Pushes back in Z Index */
        canvas.style.zIndex = shouldSet ? '-99' : '0';

        /* Position Absolutely */
        canvas.style.position = shouldSet ? 'absolute' : 'relative';
    }

    /**
     * Apply Background
     *  Sets fluid canvas's background and resets view.
     *
     * @param type: Image, Gradient, or Solid. The type of background to be applied.
     * @param value: The value to apply to the image type.
     * @param options: Additional options to configure background (optional)
     *
     */
    applyBackground(type, value, options = null) {
        type = type.toLowerCase();

        /* Make transparent */
        this.PARAMS.transparent = true;

        /* Check for Background Type */
        switch (type) {
            case 'gradient': gradient();
                break;
            case 'image': image();
                break;
            case 'solid':
                /* Make Opaque Background and Set Color
                *  value must be in { r: red, b: blue, g: green } format
                *
                *  Best way to change background color:
                *
                *  yourFluid.PARAM.BACK_COLOR.R = red;
                *  yourFluid.PARAM.BACK_COLOR.G = blue;
                *  yourFluid.PARAM.BACK_COLOR.B = green;
                *
                *  or
                *
                *  let color = {
                *       r: red,
                *       b: blue,
                *       g: green
                *   };
                *
                *   yourFluid.PARAM.BACK_COLOR = color;
                * */
            default:
                this.PARAMS.transparent = false;
                this.PARAMS.background_color = value;
        }

        /* Reset WebGL */
        this.reset();

        /** Set to Gradient
         *  Sets canvas background value to desired gradient.
         */
        function gradient() {
            /** Gradient
             *  Holds the gradient css statement.
             *
             * @type {string}
             */
            let gradient = "";

            /* Configure Gradient to Options */
            switch (options) {
                case 'radial':
                    gradient = "radial-gradient(" + value + ")";
                    break;
                case 'conic':
                    gradient = "conic-gradient(" + value + ")";
                    break;
                case 'repeating-linear':
                    gradient = "repeating-linear-gradient(" + value + ")";
                    break;
                case 'repeating-radial':
                    gradient = "repeating-radial-gradient(" + value + ")";
                    break;
                case 'linear':
                default:
                    gradient = "linear-gradient(" + value + ")";
            }

            /* Set Gradient Dom Style */
            canvas.style.backgroundImage = gradient;
        }

        /** Set to Image
         *  Sets canvas background image value to desired image and configure styles.
         */
        function image() {
            /* Set background image to desired URL, throw error if invalid URL */
            canvas.style.backgroundImage = "url('" + value + "')";

            /* Modify CSS Properties */
            if(options){
                /* Set Repeat */
                canvas.style.backgroundRepeat   = options.repeat   ? 'repeat' : 'no-repeat';

                /* Set Position */
                canvas.style.backgroundPosition = options.position ? options.position : 'center';

                /* Set Size */
                canvas.style.backgroundSize     = options.size     ? options.size : 'contain';

                /* Set Color */
                canvas.style.backgroundColor    = options.color    ? options.color : 'none';
            }
        }
    }
}

class GLProgram {
    constructor (vertexShader, fragmentShader, webGL) {
        this.uniforms = {};
        this.webGL = webGL;
        this.program = webGL.createProgram();

        webGL.attachShader(this.program, vertexShader);
        webGL.attachShader(this.program, fragmentShader);
        webGL.linkProgram(this.program);

        if (!webGL.getProgramParameter(this.program, webGL.LINK_STATUS))
            throw webGL.getProgramInfoLog(this.program);

        const uniformCount = webGL.getProgramParameter(this.program, webGL.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            const uniformName = webGL.getActiveUniform(this.program, i).name;
            this.uniforms[uniformName] = webGL.getUniformLocation(this.program, uniformName);
        }
    }

    bind () {
        this.webGL.useProgram(this.program);
    }
}


