import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext, useState} from "react";
import {faMoon,faSun} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb as faLightbulbOff}  from "@fortawesome/free-regular-svg-icons"
import {UIContext} from "./context/ui-context";

const LightDarkSwitch = () => {
const {currentTheme, setTheme} = useContext(UIContext)
  const switchTheme = () => {
    if(currentTheme === "light") {
      localStorage.setItem("theme", "dark")
      setTheme("dark")
        document.documentElement.classList.add('dark');
    }
    else {
      localStorage.setItem("theme", "light")
      setTheme("light")
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
      }
    }
  }
  return <div className="h-8 w-8 mr-4 md:h-14 md:w-14 text-md hover:bg-black hover:text-white dark:hover:shadow-lg dark:hover:bg-yellow-300 dark:hover:text-black duration-1000 transition-all text-md md:text-xl md:mr-2 justify-self-end flex justify-center rounded-full shadow-black dark:shadow-gray-300 shadow-md"><button  onClick={switchTheme} >
    <FontAwesomeIcon icon={currentTheme === "dark" ? faLightbulb : faLightbulbOff} />
  </button></div>

}

export default LightDarkSwitch