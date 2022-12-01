/* Refs
https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
http://www.cse.chalmers.se/edu/year/2015/course/TDA361/Advanced%20Computer%20Graphics/GpuGems-FluidDynamics.pdf
 */
'use strict';
import { behavior, setBehaviors } from "./defaults";
import { initWebGL, activator, setDitherURL } from './initializer';

module.exports = class Fluid {
    constructor(canvas){
        this.PARAMS = behavior;

        /* Set canvas to desired width and height
           TODO: Change to dynamic sizing  */
        canvas.width  = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        this.canvas = canvas;

        const {programs, webGL, colorFormats, pointers} = initWebGL(canvas);
        this.programs = programs;
        this.webGL = webGL;
        this.colorFormats = colorFormats;
        this.pointers = pointers;
    }

    /**
     * Activate Fluid Canvas
     *  Initiates WebGL fluid loop.
     *
     *  TODO: Finish commenting
     *
     */
    activate() {
        activator(this.canvas, this.webGL, this.colorFormats, this.programs, this.pointers);
    }

    /**
     * Deactivate Fluid Canvas
     *  Notifies active fluid canvas to clear buffers and erase fluid from call stack.
     *
     *  TODO: Implement
     */
    deactivate(){

    }

    /**
     * Reset Fluid Simulation
     *  Re-initializes WebGL context and activates simulation based on new context.
     *
     */
    reset() {
        initWebGL();
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
        setBehaviors(this.PARAMS);
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
     * @param canvas
     */
    applyBackground(type, value, options = null, canvas = this.canvas) {
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

    /**
     * Set Dither URL
     *  Sets the URL to an image to be used for dithering. This method is only responsible for calling
     *  the action in the initializer. The dither will not be applied until the next activation call.
     *
     * @param url: Path to dither in root directory.
     */
    setDitherURL(url){ setDitherURL(url); }
};
