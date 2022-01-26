import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import { useState } from "react";

function App() {

  const [darkMode,setDarkMode] = useState(false)

  return (
    <div className={`${darkMode && 'dark-mode'}`} >
      <>
      <BrowserRouter>
        <Navigation handleToggleDarkMode={setDarkMode}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      </>
    </div>
  ) 
}

export default App;
