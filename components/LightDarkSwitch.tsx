import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext, useEffect, useState} from "react";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb as faLightbulbOff}  from "@fortawesome/free-regular-svg-icons"
import {UIContext} from "../lib/ui-context";

const LightDarkSwitch = () => {
const {currentTheme, setTheme} = useContext(UIContext)
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

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
  return <div className="h-8 w-8 mr-4 md:h-14 md:w-14 text-md md:hover:bg-black md:hover:text-white md:dark:hover:shadow-lg md:dark:hover:bg-dark-4 md:dark:hover:text-black duration-300 transition-all text-md md:text-xl md:mr-2 justify-self-end flex justify-center rounded-full shadow-black dark:shadow-gray-300 shadow-md">
    <button className="w-full h-full"  onClick={switchTheme} >
    <FontAwesomeIcon icon={loaded && currentTheme === "dark" ? faLightbulb : faLightbulbOff} />
  </button></div>

}

export default LightDarkSwitch