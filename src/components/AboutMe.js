import React from "react";
import {Container} from "semantic-ui-react"



const AboutMe = () => (
        <Container style={{"color":"#fefdff", "fontSize":"1.5em"}}>
            <p>
            I am a Computer Scientist currently doing my Master degree at
            <a style={{"color": "#fefdff"}} href={"https://www.uni-bonn.de/"}> University Bonn</a>.
            </p>
            <p>
                I work as a Developer in the Area of Smart Devices and Robotics at <a style={{"color": "#fefdff"}} href={"https://inovex.de"}>
                inovex</a>
            </p>

        </Container>

);

export default AboutMe;