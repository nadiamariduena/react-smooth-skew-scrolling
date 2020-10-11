import { useState, useEffect } from "react";

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

/*

  here you grab the innerWidth and the innerHeight in getSize from line 4, 
  to be used now in the event listener in line 19 , as the handleResize from
  line28 is connected to the function inside the useEffect(()) handle Resize in line 23



*/
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}