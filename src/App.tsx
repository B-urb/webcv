import './App.css'
import './Header'
import Projects from "./Projects";
import {BrowserRouter,  NavLink, Route, Routes} from "react-router-dom";
import React from "react";
import Blogposts from "./Blogposts";
import Blogpost from "./Blogpost";
import Layout from "./Layout";
const App= ()  => {
  return (<BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Layout/>}>
              <Route index element={<Projects/>}/>
              <Route path={"blogposts"} element={<Blogposts/>}/>
                <Route path={"blogposts/:id"} element={<Blogpost/>}/>
              </Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App
