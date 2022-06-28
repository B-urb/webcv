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
    <div className="h-screen overflow-scroll grid bg-yellow-300 text-black dark:bg-black font-jetbrains dark:text-yellow-300">
        <div className="row-span-1 border-b-4 border-dashed border-black dark:border-yellow-300 pb-3">
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
