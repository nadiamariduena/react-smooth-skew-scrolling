## REACT SMOOTH SKEW SCROLLING

#### Tutorial about how to make a nice effect when scrolling

<p>In this project i will continue my training in Hooks, so i will be using Use Effect and other hooks such as:</p>

<ul>

<li>Use ref</li>
<li>UseEffect</li>
<li>useWindowSize (this one is a hook he already created for the project)</li>

</ul>

#### :bee: Other stuff i will be using:

<ul>

<li>getBoundingClientRect()</li>

</ul>

<br>
<br>

### Explanation of key points

#### 1) \_\_

```javascript

import React, { useRef, useEffect } from "react";

import images from "./images/images";
function App() {
  // the useRef must to be added to the respective className , in order to reach these className and make the effect work

  const app = useRef();
  const scrollContainer = useRef();


/*
set up the height of the BODY, equivalent to
whatever the height of the scrollContainer
is going to be, FOR THAT you are going to need a useEffect

useEffect?
Its is a hook that will execute certain FUNCTIONS or commands
depending of what you want to do, like for example "ANYTIME THE PAGE IS LOADED" or based in certain outcomes or anytime  something CHANGES this effect will run

*/
 <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        {images.map((image, index) => (
          <>
```

<br>

#### UseEffect :

###### Its is a hook that will execute certain functions or commands depending of what you want to do, like for example "anytime the page is loaded" or based in certain outcomes or anytime something CHANGES this effect will run.

<br>
<br>

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

##### Tutorial by: Wrong Akram
