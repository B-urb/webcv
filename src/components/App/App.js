import React, {Component} from "react";
import {Container,  Divider} from "semantic-ui-react"
import HomepageHeading from "../Functional/HomepageHeading"
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Functional/Footer"
import "./App.css"



class App extends Component {
    render(){
        return(
         <div className='parent'>
            <Container>
            <HomepageHeading/>
            <Divider inverted/>
            <AboutMe/>
            <Container style={{height:"500px"}}>
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </Container>
            </Container>
                <Footer/>
         </div>


        )
    }

}

export default App;