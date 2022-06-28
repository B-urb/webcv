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
  return <button onClick={switchTheme}>
    <FontAwesomeIcon icon={theme === "dark" ? faLightbulb : faLightbulbOff} />
  </button>
  
  
}

export default LightDarkSwitch