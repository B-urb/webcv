import React from "react";
import {Container, Header, Segment} from "semantic-ui-react"


class AboutMe extends React.Component {
    /**
     * Source: https://stackoverflow.com/a/24181701/5529396
     * @param birthday {Date}
     * @returns {number}
     */
    calculateAge(birthday) {
        const ageDifMs = Date.now() - birthday;
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    render() {
        return (<Container style={{"fontSize": "1.5em"}}>
                <Header as='h2'>About Me</Header>

                <Container as='p'>
                    Hey, my name is Björn and I am a {this.calculateAge(new Date("September 06, 1994 00:00:00"))}&nbsp;
                    years old computer scientist. I finished my Bachelor in Applied Computer Science at <a
                    href={"https://rub.de"}>
                    Ruhr-Universität Bochum</a> in 2017 and currently I am doing my Master degree at
                    <a href={"https://www.uni-bonn.de/"}> University Bonn</a>.
                    <br/>
                    <br/>
                    Next to studying I work as a Developer in the Area of Smart Devices and Robotics at <a
                    href={"https://inovex.de"}>
                    inovex</a>. My focus is programming of embedded devices with C++ in the area of the Internet of
                    Things. Other topics I work on are e.g Cloud infrastructure and security.
                    <br/>
                    <br/>
                    Previously I have worked at <a href={"https://www.zf.com/"}>ZF</a>,&nbsp;
                    <a href={"https://www.porshe.de/"}>Porsche</a> and <a href={"https://www.hochtief.de/"}>Hochtief</a>.


                </Container>

            </Container>
        )
    }

}


export default AboutMe;