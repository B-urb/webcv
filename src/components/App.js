import React, {Component} from "react";
import {Segment} from "semantic-ui-react"
import HomepageHeading from "./HomepageHeading"

class App extends Component {
    render(){
        return(
            <Segment style={{height:"100vh",backgroundColor:"black"}}>
            <HomepageHeading/>
            </Segment>
        )
    }

}

export default App;