import React from 'react'
import {Header, Modal, Label, List} from 'semantic-ui-react'

const AboutPage = () => (
    <Modal
        trigger={<Label as="a">About this page</Label>}
        closeIcon>
        <Modal.Header>About this page</Modal.Header>
        <Modal.Content image scrolling>
               <Modal.Description>
                <Header>Framework and Technologies</Header>
                <List>
                    <List.Item>Semantic UI React</List.Item>
                    <List.Item>Gitlab CI/CD</List.Item>
                    <List.Item>Traefik</List.Item>
                </List>
            </Modal.Description>
        </Modal.Content>
    </Modal>
);

export default AboutPage;
