import React, { useRef, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize"; //3
import images from "./images/images";
//
//

function App() {
  // HOOK
  //   4
  const size = useWindowSize();
  //
  //
  //1  ---------------
  //   REF
  const app = useRef();
  const scrollContainer = useRef();
  //
  //
  //
  //
  //   ---------------
  // 7 related to the 6 step
  const skewConfigs = {
    ease: 0.1, //this is the reason why it dodnt work the first time, the problem was that i set it up at 1 instead of 0.1
    current: 0,
    previous: 0,
    rounded: 0,
  };
  //
  //
  // 2 ------------------
  //
  useEffect(() => {
    //   what the useEffect is doing here is replacing the componentdidMOunt
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
    // 5  after you add this: const size = useWindowSize(); THEN ADD this: [size.height]);
  }, [size.height]);
  //
  //
  //
  // 11 ------------
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);
  //
  //
  //
  // 6 ------------------
  //
  const skewScrolling = () => {
    //   all the following is connected to the skewConfigs function on line 18
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    //
    //
    //
    // 8 ------------  Difference between
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width; //you access size.width through useWindowSize(); on line 9, thats connected to the function in the HOOK file
    const velocity = +acceleration;
    const skew = velocity * 5.5; //original 7.5  the more the scroll is emphasized the more the deg of the image/content , is going to move in a direction
    //
    //
    // 9 ----------   ASSIGN the scroll container the skew
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
    //
    //
    // 10 ------------

    requestAnimationFrame(() => skewScrolling());
  };
  //
  //

  return (
    //   2  ref={app} and ref={scrollContainer}
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        {images.map((image, index) => (
          <>
            <div key={index} className="img-container">
              <img src={image} alt={`people ${index}`} />
            </div>
            <h2>
              Skewww <span className="outline"> Scroll</span>
            </h2>
          </>
        ))}
      </div>
    </div>
  );
}
export default App;

/*

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    // variables for the velocity
    //
    // Difference between
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





*/
