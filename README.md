# Fluid JS

A JavaScript library that allows for easy deployment of WebGL rendered fluid simulations based on the Navier-Stokes Equations for incompressible flow.

Set up is easy and customization is rich, get a beautifully rendered WebGL fluid simulation running in your responsive web project in less than five minutes.

The purpose behind this was to be able to dynamically work the simulation designed by [PavelDoGreat](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) in frameworks like Angular 7. 

> This project is in early-development and open to contribution.

---

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Deploy how you would usually deploy your standard HTML website.


## Starting a New Project

---

Open git bash and clone the library to your desktop. (or where ever you want of course)
```
cd Desktop/
git clone https://github.com/malik-tillman/Fluid-JS.git
```

#### Using the Demo (OPTIONAL)
Located in ```/demo```, there is a fully rigged setup you can explore and tweak to get familar.
```/demo/fluid.js``` is where the library lives. If you are interested in learing WebGL check out the links below.

#### Loading fluid into your browser
1. Select `/demo/index.html`
2. Right click   
3. Select `'Open with'` 
4. Select your browser.


## Adding to Existing Project

---

#### Add `fluid.js` to `<head>` tag

~~~ html
<head>
  <title>Fluid JS Example</title>
  
  <script type="text/javascript" src="fluid.js"></script>
</head>
~~~

#### Add a new canvas to the `<body>` tag. Give it an identifier so you can retrieve it from DOM later

~~~ html
<body>
    . . .
    
    <canvas id="renderSurface"></canvas>
</body>
~~~

#### Now we can initialize the canvas as our fluid's surface

~~~ html
<script>
    const canvas = document.getElementById('renderSurface');

    let myFluid = new Fluid(canvas);
    myFluid.activate();
</script>
~~~

#### You may also want to add some styles

~~~ html
<style>
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
</style>
~~~

#### Full Code

~~~ html
<html>
  <head>
    <title>Fluid JS Example</title>
    <script type="text/javascript" src="fluid.js"></script>
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
~~~

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
