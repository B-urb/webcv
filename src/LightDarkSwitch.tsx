import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {faMoon,faSun} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb as faLightbulbOff}  from "@fortawesome/free-regular-svg-icons"

const LightDarkSwitch = () => {

const [theme, setTheme] = useState("dark")
  const switchTheme = () => {
    if(theme == "light") {
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
  return <div className="h-8 w-8 mr-4 md:h-14 md:w-14 text-md hover:dark:shadow-lg hover:dark:bg-yellow-300 hover:dark:text-black duration-1000 transition-all text-md md:text-xl md:mr-2 justify-self-end flex justify-center rounded-full shadow-black dark:shadow-gray-300 shadow-md"><button  onClick={switchTheme} >
    <FontAwesomeIcon icon={theme === "dark" ? faLightbulb : faLightbulbOff} />
  </button></div>

}

export default LightDarkSwitch