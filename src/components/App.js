import React, {Component} from "react";
import {Container, Segment, Divider} from "semantic-ui-react"
import HomepageHeading from "./HomepageHeading"
import AboutMe from "./AboutMe";



class App extends Component {
    render(){
        return(
            <Segment style={{height:"100vh"}}>
            <Container style={{width:"80vw"}}>
            <HomepageHeading/>
            <Divider inverted/>
            <AboutMe/>
            </Container>
            </Segment>

        )
    }

}

export default App;