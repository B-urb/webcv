import React from 'react'
import {Header, Modal, Label} from 'semantic-ui-react'

const AboutPage = () => (
    <Modal
        trigger={<Label as="a">About this page</Label>}
        closeIcon>
        <Modal.Header>About this page</Modal.Header>
        <Modal.Content image scrolling>
               <Modal.Description>
                <Header>Framework and Technologies</Header>
                <p>
                    This is an example of expanded content that will cause the modal's
                    dimmer to scroll
                </p>
            </Modal.Description>
        </Modal.Content>
    </Modal>
);

export default AboutPage;
