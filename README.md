# 🌊 Fluid.js 🌊

A JavaScript library that allows for easy deployment of WebGL rendered fluid simulations based on the Navier-Stokes Equations for Incompressible Flow.

Set up is easy and customization is rich, get a beautifully rendered WebGL fluid simulation running in your responsive web project in less than five minutes.

This library is an extension on the fluid simulation implemented by [PavelDoGreat](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation). 

> This project is in early-development and open to contribution. Do not use this library in your production level project unless you have properly evaluated the performance and browser compatibility. 


Getting Started
--
###### CDN
```HTML
<script src="https://cdn.jsdelivr.net/npm/fluid-canvas@latest"></script>
```

###### Terminal
```shell script
npm i fluid-canvas
```

###### Clone
```shell script
git clone https://github.com/malik-tillman/Fluid-JS.git
```

Usage
--

##### Add Fluid.js to your `<head>` 

```html
<head>
  <meta charset="UTF-8">
  <title>Fluid JS Example</title>

  
  <script src="https://cdn.jsdelivr.net/npm/fluid-canvas@latest"></script>
</head>
```

##### Create a `canvas` element to render the fluid
> Give it an identifier to reference in javascript

```html
<body>
    . . .
    
    <canvas id="renderSurface"></canvas>
</body>
```

##### Now we can initialize the `canvas` as our fluid's surface

```javascript
import Fluid from 'fluid';

const canvas = document.getElementById('renderSurface');
let myFluid = new Fluid(canvas);

myFluid.activate();
```

> Or do it with an inline script tag

```html
 <script>
    const canvas = document.getElementById('renderSurface');
    const myFluid = new Fluid(canvas);

    myFluid.activate();
 </script>
 ```

##### You may also want to add some styles

```css
body {
  margin: 0;
}

canvas {
  width: 100vw;
  height: 100vh;
}
```

##### Full Example Code

```html
<html>
  <head>
    <title>Fluid JS Example</title>

    <script src="https://cdn.jsdelivr.net/npm/fluid-canvas@latest"></script>
    
    <style>
      body {
          margin: 0;
      }

      #renderSurface {
          width: 100vw;
          height: 100vh;
      }
    </style>
  </head>

  <body>
      <canvas id="renderSurface"></canvas>

      <script>
          const canvas = document.getElementById('renderSurface');
          let myFluid = new Fluid(canvas);
          myFluid.activate();
      </script>
  </body>
</html>
```

Configuring Fluid Behavior
--

There are two ways you can configure the fluid simulation's behavior.

#### Mapping Behaviors

---

Map multiple behavior properties at once.
> `.mapBehaviors` does not dynamically assign values. This means you must `.activate` your fluid every time you map new behavior properties.

##### Syntax

```javascript
fluid.mapBehaviors({
    property: value
});
```

##### Example

```javascript
fluid.mapBehaviors({
    sim_resolution: 128,
    dye_resolution: 512,

    paused: false,
    embedded_dither: true,

    dissipation: .97,
    velocity: .98,
    pressure: .8,
    pressure_iteration: 20,
    curl: 0,
    emitter_size: 0.5,

    render_shaders: true,
    multi_color: true,

    render_bloom: false,
    bloom_iterations: 8,
    bloom_resolution: 256,
    intensity: 0.8,
    threshold: 0.6,
    soft_knee: 0.7,

    background_color: { r: 15, g: 15, b: 15 },
    transparent: false
});

fluid.activate();
```

> These are the main behavior configurations. Documentation on each property and how to use them is currently in the works. 

#### Dynamic Assignment 

---

This method allows for most fluid behaviors to be adjusted `on-the-fly`. This means you can change a property without having to re-activate your simulation.

##### Syntax

```javascript
fluid.PARAMS.property = value;
```

##### Example

```javascript
fluid.PARAMS.curl = 25;
```

> Documentation in-progress

#### Changing Background

---

You may set the background mode to `'solid'`, `'gradient'`, or `'image'`. Applying a background requires you specify a mode and a value for that mode. You also have the option of adding addition configurations for the background. 
> The value is the same it would be if you was using regular CSS. 

##### Syntax

```javascript
fluid.applyBackground(mode, value, options);
```

##### Example

```javascript
// Solid Background
fluid.applyBackground('solid', '#e66465');

// Gradient Background
fluid.applyBackground('gradient', '#e66465, #9198e5', 'linear');
fluid.applyBackground('gradient', '#e66465, #9198e5', 'radial');
fluid.applyBackground('gradient', '#f69d3c, #3f87a6', 'conic');
fluid.applyBackground('gradient', '#f69d3c, #3f87a6 50px', 'repeating-linear');
fluid.applyBackground('gradient', '#f69d3c, #3f87a6 50px', 'repeating-radial');

// Image Background
fluid.applyBackground(
    'image', 
    './image.jpg', 
    {
        repeat: 'repeat',
        position: 'center',
        size: '100px',
        color: 'none'  
    }
);
``` 

> Documentation in-progress

#### Setting Dither

---
By default, the simulation will utilize the embedded dither. But you have the option to use a custom image. 

For this set `.PARAM.embedded_dither` to `false`. This will search for a dither image in `ROOT/assets/dither.png`.

```javascript
fluid.PARAMS.embedded_dither = false;
```

You may also change this default path with `.setDitherURL`.

```javascript
fluid.setDitherURL('../images/myDither.png');
```

> Documentation in-progress

Browser Support
--

These browsers are guaranteed working as per my testing:
- Chrome
- FireFox
- Safari
- Opera
- Edge (IE11)



References
--

- [Mozilla WebGL Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

- [Fast Fluid Dynamics Simulation on the GPU](http://developer.download.nvidia.com/books/HTML/gpugems/gpugems_ch38.html)

- [Based on PavelDoGreat's Fluid Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation)

- [MHarr's Fluids-2d with ThreeJS](https://github.com/mharrys/fluids-2d)

- [Haxiomic's GPU-Fluid-Experiment](https://github.com/haxiomic/GPU-Fluid-Experiments)



