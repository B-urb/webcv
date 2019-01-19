import React, {Component} from "react";
import {Container, Segment, Divider} from "semantic-ui-react"
import HomepageHeading from "./HomepageHeading"
import WorkHistory from "./WorkHistory"
import EducationHistory from "./EducationHistory"

class App extends Component {
    render(){
        return(
            <Segment style={{height:"100vh",backgroundColor:"black"}}>
                <Container text>
            <HomepageHeading/>
            <WorkHistory/>
                    <Divider inverted/>

                    <EducationHistory/>
                </Container>
            </Segment>
        )
    }

}

export default App;