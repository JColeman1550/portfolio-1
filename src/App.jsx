import { useState } from "react"; 
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false); // set state of DarkMode, current state is false or lightmode

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // prevMode reverses darkMode
    document.documentElement.classList.toggle("dark", !darkMode) // if darkMode is T it applies "dark" class
  }

  // if statemet: if darkMode is T then background is black,  F then background is white
  return ( 
    <>
    <div className={`min-h-screen w-full flex flex-col sm:flex-row
    subpixel-antialiased ${darkMode ? "bg-black" : "bg-white"}`}>  
      <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Home />
    </div> 
    </>
  );
}

export default App;
