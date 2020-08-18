import React from "react";
import {Container, Header, List, Image} from "semantic-ui-react"

//TODO: Add frameworks
class Skills extends React.Component {


    render() {
        return (<Container style={{"fontSize": "1.5em"}}>
                <Header as='h2'>Skills</Header>
                <List>
                    <List.Item>
                        <Image avatar src='cpp.png' />
                        <List.Content>
                            <List.Header>C++</List.Header>
                            Skill Level: C++ is my main language and I am pretty experienced with it
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='python.png' />
                        <List.Content>
                            <List.Header>Python</List.Header>
                            Skill Level: Advanced, I have used python for machine learning and computer vision
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='/images/avatar/small/daniel.jpg' />
                        <List.Content>
                            <List.Header>Java</List.Header>
                            Skill level: Basic
                        </List.Content>
                    </List.Item>
                </List>



            </Container>
        )
    }

}


export default Skills;