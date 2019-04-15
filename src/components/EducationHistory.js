import React from "react"

import {

    Header, Container, List,Image
} from "semantic-ui-react"




const EducationHistory = () => (
    <Container fluid>
        <Header inverted>
            Education
        </Header>

        <List inverted size={'massive'} divided>
            <List.Item>
                <Image style={{fontSize:42}} avatar src='https://www.xing.com/img/custom/cp/assets/logo/2/4/1/12865/square_512px/UNI_Bonn_Logo_Standard_RZ_L.jpg' />
                <List.Content>
                    <List.Header as='a'>Rheinische Friedrichs Wilhelms Universität Bonn</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <Image style={{fontSize:42}} avatar src='' />
                <List.Content>
                    <List.Header as='a'></List.Header>
                </List.Content>
            </List.Item>
        </List>
    </Container>
);


export default EducationHistory;