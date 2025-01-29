import React from "react";
import "./App.css";
import AboutUs from "./components/about-us/_component";
import Banner from "./components/banner/_component";
import Footer from "./components/footer/_component";
import WhatWeDo from "./components/what-we-do/_component";
import { Offcanvas, initTWE } from "tw-elements";

function App() {
  React.useEffect(() => {
    initTWE({ Offcanvas });
  }, []);
  return (
    <>
      <Banner />
      <AboutUs />
      <WhatWeDo />
      <Footer />
    </>
  );
}

export default App;
