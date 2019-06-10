import React, {Component} from "react";
import {Container, Segment} from "semantic-ui-react"
import HomepageHeading from "./HomepageHeading"



class App extends Component {
    render(){
        return(
            <Segment style={{height:"100vh",backgroundColor:"rgb(59, 37, 37)"}}>
            <Container style={{width:"80vw"}}>
            <HomepageHeading/>

            </Container>
            </Segment>

        )
    }

}

export default App;