import React from "react"

import {

    Header, Container, List,Image
} from "semantic-ui-react"




const EducationHistory = () => (
    <Container fluid>
        <Header inverted>
            Education
        </Header>

        <List inverted>
            <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                <List.Content>
                    <List.Header as='a'>Rheinische Friedrichs Wilhelms Universität Bonn</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                <List.Content>
                    <List.Header as='a'>Ruhr-Universität Bochum</List.Header>
                </List.Content>
            </List.Item>
        </List>
    </Container>
);


export default EducationHistory;