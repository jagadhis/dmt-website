import './App.css';
import { useState, useEffect } from "react";
import Maintanence from './Pages/Maintanence';
import { Navigation } from "./components/navigation";
import JsonData from "./data/data.json";
import { Header } from "./components/header";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="App">
       <Navigation />
      <Header data={landingPageData.Header} />
      <Maintanence />

    </div>
  );
}

export default App;
