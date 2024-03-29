## REACT SMOOTH SKEW SCROLLING

## Tutorial by: [Wrong Akram](https://www.youtube.com/watch?v=Dz6Sg630I8M)
### The Math data: by Jesper Landberg


<br>
<br>

![rested](./src/images/preview-scroll.gif)

<br>
<br>

<p>In this project i will continue my training in Hooks, so i will be using Use Effect and other hooks such as:</p>

<ul>

<li>Use ref</li>
<li>UseEffect</li>
<li>useWindowSize (this one is a hook he already created for the project)</li>

</ul>

#### :bee: Other stuff i will be using:

<ul>

<li>getBoundingClientRect()  this is a method</li>

</ul>

<br>
<br>

### Explanation of key points

#### 1) \_\_

```javascript

import React, { useRef, useEffect } from "react";

import images from "./images/images";
function App() {
  /*the useRef must to be added to the respective className ,
  in order to reach these className and make the effect work*/

  const app = useRef();
  const scrollContainer = useRef();


/*
set up the height of the BODY, equivalent to
whatever the height of the scrollContainer
is going to be, FOR THAT you are going to need a useEffect

useEffect?
Its is a hook that will execute certain FUNCTIONS or
 commands
depending of what you want to do, like for example
"ANYTIME THE PAGE IS LOADED" or based in certain
outcomes or anytime  something CHANGES this effect will run

*/
 <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        {images.map((image, index) => (
          <>
```

<br>

#### 2) \_\_ add the following to block the scrolling

```javascript
.App {
  /*
 smooth scrolling TIPS / WARNING!!

you have to apply the following to the children div's in this case the .scroll

 If you want to use this effect in already existent projects where you already have a fixed height
 , you will have to delete that height and replace it for a padding that will help the content to
 expand depending of what you have, this padding will give the content a certain amount of space in case
 the content isn't sufficient.
  */

  // -----------
  // this set up here is so that it dont move, at this stage if you check the browser you cannot longer scroll
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  // -----------

  .scroll {
    padding: 2vh 0;
    pointer-events: none;
  }
```

#### UseEffect :

###### Its is a hook that will execute certain functions or commands depending of what you want to do, like for example "anytime the page is loaded" or based in certain outcomes or anytime something CHANGES this effect will run.

<br>

#### CPU related comments

###### using the translate3d is a good idea when you want to leverage the CPU since it's using GPU driven animation

<br>
<br>

## KEY POINTS for the animation

```javascript
const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease; //represent the previous position of the scroll
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;


  /*
   ------------------------
   MATH / scroll Position
   ------------------------

  MATH to determine some sort of
  difference in terms of the scroll POS
  as well as the previous.


math.round will round an integer to the nearest
https://www.w3schools.com/jsref/jsref_round.asp

Math.round(2.5);
result:  2.49 will be rounded down (2), and 2.5 will be rounded up (3).
  */


    // variables for the velocity
    //
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //
    //
    //
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
    //
    //
    //

    requestAnimationFrame(() => skewScrolling());
```

## :bee: Dependencies

<br>

```javascript

npm i react

npm i react-dom

npm i react-scripts

npm i node-sass --save

npm i autoprefixer@9.8.0

npm i gh-pages --save-dev

npm i framer-motion
```

## Tutorial by: Wrong Akram , Math data by Jesper Landberg

<a href="https://jesperlandberg.dev/" target="_blank">website </a>
