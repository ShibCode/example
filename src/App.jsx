import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".box", {
      y: "400px",
      scrollTrigger: {
        document: "body",
        start: "10% start",
        end: "50% 50%",
        markers: true,
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="box">App</div>;
    </div>
  );
};

export default App;
