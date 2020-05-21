import React, {Component} from "react";
import {Container,  Divider} from "semantic-ui-react"
import HomepageHeading from "../Functional/HomepageHeading"
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Functional/Footer"
import "./App.css"
import Skills from "../Skills/Skills";
import SocialMediaSticky from "../Functional/SocialMediaSticky";



class App extends Component {

    render(){
        return(
         <div className='parent'>
             <Container >
             <SocialMediaSticky active={true}/>
            <Container>
            <HomepageHeading/>
            <Divider inverted/>
            <AboutMe/>
            </Container>
             <Divider/>
            <Container style={{height:"500px"}}>
                <Skills/>
            </Container>


             </Container>
             <Footer/>
         </div>


        )
    }

}

export default App;