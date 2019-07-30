# 🌊 Fluid.js 🌊

A JavaScript library that allows for easy deployment of WebGL rendered fluid simulations based on the Navier-Stokes Equations for incompressible flow.

Set up is easy and customization is rich, get a beautifully rendered WebGL fluid simulation running in your responsive web project in less than five minutes.

The purpose behind this was to be able to dynamically work the simulation designed by [PavelDoGreat](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) in frameworks like Angular 7. 

> This project is in early-development and open to contribution.


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

##### Add script in `<head>` tag

```html
<head>
  <title>Fluid JS Example</title>
  
  <script src="https://cdn.jsdelivr.net/npm/fluid-canvas@latest"></script>
</head>
```

##### Create a new canvas in the `<body>` tag. Give it an identifier so you can retrieve it from DOM later

```html
<body>
    . . .
    
    <canvas id="renderSurface"></canvas>
</body>
```

##### Now we can initialize the canvas as our fluid's surface

```javascript
import Fluid from 'fluid';

const canvas = document.getElementById('renderSurface');
let myFluid = new Fluid(canvas);

myFluid.activate();
```

##### You may also want to add some styles

```css
body {
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100%;
}

canvas {
  width: 100%;
  height: 100%;
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
          position: fixed;
          width: 100%;
          height: 100%;
      }

      #renderSurface {
          width: 100%;
          height: 100%;
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

Configure Fluid Behavior
--

There are two ways you can configure the fluid behavior.

#### Mapping Behaviors

---

```javascript
fluid.mapBehaviors({
    curl: 25,
    pressure: .9,
    dissipation: .98,
    transparent: false,
    embedded_dither: true
});

fluid.activate();
```
This method allows for assignment of multiple fluid behavior properties at once. It is not dynamic, you must re-activate the simulation every time you want to see the effects of the mapping.

#### Dynamic Assignment 

---

```javascript
fluid.PARAMS.curl = 25;
```
This method allows for most fluid behaviors to be adjusted on-the-fly. This means you can change a property without having to re-activate your simulation.

## Support

---

I've only tested this on a limited amount of browsers, so support is choppy. These browsers are guaranteed working as per my testing:
- Chrome
- FireFox
- Safari
- Opera

> I'm currently working out Edge compatability.


## Links

- [Mozilla WebGL Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

- [Fast Fluid Dynamics Simulation on the GPU](http://developer.download.nvidia.com/books/HTML/gpugems/gpugems_ch38.html)

- [Based on PavelDoGreat's Fluid Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation)

- [MHarr's Fluids-2d with ThreeJS](https://github.com/mharrys/fluids-2d)

- [Haxiomic's GPU-Fluid-Experiment](https://github.com/haxiomic/GPU-Fluid-Experiments)
