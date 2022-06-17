import {ReactElement, useState} from 'react'
import './App.css'
import './Header'
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
const App= ()  => {

  return (
      <>
      <div className="w-screen top-0 bg-gray-600 h-12 hidden">THis is navbar</div>
    <div className="h-screen grid bg-yellow-50 text-black dark:bg-black font-mono dark:text-yellow-300">
        <div className="row-span-1">
        <Header/>
        </div>
        <div className="row-auto">
            <Projects/>
        </div>
        <div className=" row-span-1 flex justify-center items-center content-center justify-items-center ">
            <Footer/>
        </div>
    </div></>
  )
}

export default App
