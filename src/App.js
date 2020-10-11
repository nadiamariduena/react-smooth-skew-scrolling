import React, { useRef, useEffect } from "react";

import images from "./images/images";
//
//

function App() {
  // the useRef must to be added to the respective className , in order to reach these className and make the effect work
  const app = useRef();
  const scrollContainer = useRef();

  /*
  The first step is to prevent the scrolling from the app , for that you have to add some additionla scss styles
  so that the page DONT SCROLL while you work on the effect
  
  */
  //

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        {images.map((image, index) => (
          <>
            <div key={index} className="img-container">
              <img src={image} alt={`people ${index}`} />
            </div>
            <h2>
              Skewww <span className="outline"> Scrolllingg</span>
            </h2>
          </>
        ))}
      </div>
    </div>
  );
}
export default App;
