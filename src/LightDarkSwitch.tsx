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
  return <div className="h-10 w-10 mr-4 mt-2 md:h-16 md:w-16 text-md md:text-2xl md:mr-2 md:mt-2 justify-self-end flex justify-center rounded-full shadow-black dark:shadow-gray-300 shadow-md"><button  onClick={switchTheme} >
    <FontAwesomeIcon icon={theme === "dark" ? faLightbulb : faLightbulbOff} />
  </button></div>

}

export default LightDarkSwitch