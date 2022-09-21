import './App.css';
import { useState, useEffect } from "react";
import Maintanence from './Pages/Maintanence';
import { Navigation } from "./Components/navigation";
import JsonData from "./Data/data.json";
import { Header } from "./Components/header";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="App">
       <Navigation />
      <Header data={landingPageData.Header} />
      

    </div>
  );
}

export default App;
