import { useState, useEffect } from "react";
import { Navigation } from "./Components/navigation";
import { Header } from "./Components/header";
// import { Features } from "./Components/features";
import { About } from "./Components/about";
import { Services } from "./Components/services";
// import { Gallery } from "./Components/gallery";
// import { Testimonials } from "./Components/testimonials";
// import { Team } from "./Components/Team";
import { Contact } from "./Components/contact";
import JsonData from "./Data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;