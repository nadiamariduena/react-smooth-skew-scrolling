import React from "react";
import images from "./images/images";
//
//

function App() {
  return (
    <div className="App">
      <div className="scroll">
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
