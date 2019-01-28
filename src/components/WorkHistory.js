import React from "react"

import {

    Header, Container, List,Image
} from "semantic-ui-react"




const WorkHistory = () => (
<Container fluid>
    <Header inverted>
        Work
    </Header>
    <List inverted>
    <List.Item>
    <Image avatar src='%PUBLIC_URL%/zf_logo.svg' />
    <List.Content>
    <List.Header as='a'>ZF Group</List.Header>
    <List.Description>
        Apr 2018 - today
    </List.Description>
    </List.Content>
</List.Item>
<List.Item>
    <Image avatar src='https://auto-logos.com/wp-content/uploads/2018/01/porsche-logo.png' />
    <List.Content>
    <List.Header as='a'>Porsche AG</List.Header>
    <List.Description>
        Sep 2017 - Mar 2019
    </List.Description>
    </List.Content>
</List.Item>
<List.Item>
    <Image avatar src='https://upload.wikimedia.org/wikipedia/de/9/9e/Hochtief-Logo.svg' />
    <List.Content>
    <List.Header as='a'>Hochtief AG</List.Header>
    <List.Description>
       Oct 2015 - Sep 2017
    </List.Description>
    </List.Content>
</List.Item>
</List>
    </Container>
);

export default WorkHistory;