import React, {Dispatch, PropsWithChildren, SetStateAction, useEffect, useState} from "react";

interface Preference {
  theme: string,
  toggleTheme: Function
}
const defaultTheme = typeof window !== "undefined" ? localStorage.getItem("theme")!: "dark"
//const defaultTheme = (typeof window !== 'undefined')  ? localStorage.getItem("theme")! : "light"
const defaultUpdate: Dispatch<SetStateAction<string>> = () => defaultTheme
export const UIContext = React.createContext({currentTheme: defaultTheme,setTheme: defaultUpdate });
UIContext.displayName = "UiContext"

  export default function Provider(props: PropsWithChildren<{}>) {
  const [currentTheme, setTheme] = useState(defaultTheme);
  useEffect(() => {
        const theme = localStorage.getItem("theme")!
    console.log("Theme on render " + theme);
        setTheme(theme);
      }

  )


  return (<UIContext.Provider value={{currentTheme, setTheme}}>{props.children}</UIContext.Provider>);
};