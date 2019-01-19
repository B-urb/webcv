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
    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
    <List.Content>
    <List.Header as='a'>ZF Group</List.Header>
    <List.Description>
        Last seen watching{' '}
        <a>
            <b>Arrested Development</b>
        </a>{' '}
        just now.
    </List.Description>
    </List.Content>
</List.Item>
<List.Item>
    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
    <List.Content>
    <List.Header as='a'>Porsche AG</List.Header>
    <List.Description>
        Last seen watching{' '}
        <a>
            <b>Arrested Development</b>
        </a>{' '}
        just now.
    </List.Description>
    </List.Content>
</List.Item>
<List.Item>
    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
    <List.Content>
    <List.Header as='a'>Hochtief AG</List.Header>
    <List.Description>
        Last seen watching{' '}
        <a>
            <b>Arrested Development</b>
        </a>{' '}
        just now.
    </List.Description>
    </List.Content>
</List.Item>
</List>
    </Container>
);

export default WorkHistory;