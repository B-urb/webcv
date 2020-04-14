import React, {Component} from "react";
import {Container, Segment, Divider} from "semantic-ui-react"
import HomepageHeading from "../Functional/HomepageHeading"
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Functional/Footer"



class App extends Component {
    render(){
        return(
         <div className='parent'>
            <Container>
            <HomepageHeading/>
            <Divider inverted/>
            <AboutMe/>
            </Container>
                <Footer/>
         </div>


        )
    }

}

export default App;