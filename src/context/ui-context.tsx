import React, {Dispatch, PropsWithChildren, SetStateAction, useState} from "react";

interface Preference {
  theme: string,
  toggleTheme: Function
}
const defaultTheme = localStorage.getItem("theme") ?? "light"
const defaultUpdate: Dispatch<SetStateAction<string>> = () => defaultTheme
export const UIContext = React.createContext({currentTheme: defaultTheme,setTheme: defaultUpdate });
  export default (props: PropsWithChildren<{}>) => {
  const [currentTheme, setTheme] = useState(defaultTheme);


  return (<UIContext.Provider value={{currentTheme,setTheme}}>{props.children}</UIContext.Provider>);
};