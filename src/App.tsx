import './App.css'
import './Header'
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import React from "react";
import Blogposts from "./Blogposts";
import Blogpost from "./Blogpost";
const App= ()  => {
  return (<BrowserRouter>
      <div className="w-screen top-0 bg-gray-600 h-12 md:visible">
        <nav>
        <Link to="/">Home</Link>
        <Link to="blogposts">Blog</Link>
        </nav>
      </div>
    <div className="h-screen overflow-scroll grid bg-yellow-300 text-black dark:bg-black font-jetbrains dark:text-yellow-300">
        <div className="row-span-1 border-b-4 border-dashed border-black dark:border-yellow-300 pb-3">
        <Header/>
        </div>
        <div className="row-auto">
            <Routes>
              <Route path={"/"} element={<Projects/>}/>
              <Route path={"blogposts"} element={<Blogposts/>}>
                <Route path={":id"} element={<Blogpost content={"Test ajodjaojdoajdoajdojaodj"}/>}/>
              </Route>
            </Routes>
        </div>
        <div className=" row-span-1 flex justify-center items-center content-center justify-items-center ">
            <Footer/>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App
