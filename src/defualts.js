export let behavior = {
    sim_resolution: 128,
    dye_resolution: 512,
    paused: false,
    clamp_values: true,
    embedded_dither: true,

    /* Fluid Dissipation Behaviors*/
    dissipation: .97,
    velocity: .98,
    pressure: .8,
    pressure_iteration: 20,

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
    bloom_iterations: 8,
    bloom_resolution: 256,
    intensity: 0.8,
    threshold: 0.6,
    soft_knee: 0.7,

    // bloom_resolution: 256*4,
    // bloom_iterations: 1,
    // intensity: 0.6,
    // threshold: 0.3,
    // soft_knee: 1.0,

    /* Background */
    background_color: { r: 15, g: 15, b: 15 },
    transparent: false
};

export const DRAWING_PARAMS = {
    alpha: true,
    depth: false,
    stencil: false,
    antialias: false,
    preserveDrawingBuffer: false,
    powerPreference: "default"
};

export const SHADER_SOURCE = {
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

export function setBehaviors(params) {
    behavior = {...behavior, ...params};
}
