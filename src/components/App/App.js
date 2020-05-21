import React, {Component} from "react";
import {Container,  Divider} from "semantic-ui-react"
import HomepageHeading from "../Functional/HomepageHeading"
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Functional/Footer"
import "./App.css"
import Skills from "../Skills/Skills";



class App extends Component {
    render(){
        return(
         <div className='parent'>
            <Container>
            <HomepageHeading/>
            <Divider inverted/>
            <AboutMe/>
            </Container>
             <Divider/>
            <Container style={{height:"500px"}}>
                <Skills/>
            </Container>

                <Footer/>
         </div>


        )
    }

}

export default App;