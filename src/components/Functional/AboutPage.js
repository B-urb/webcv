import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const AboutPage = () => (
    <Modal trigger={<a>About this page</a>}>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image scrolling>
               <Modal.Description>
                <Header>Modal Header</Header>
                <p>
                    This is an example of expanded content that will cause the modal's
                    dimmer to scroll
                </p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                Proceed <Icon name='chevron right' />
            </Button>
        </Modal.Actions>
    </Modal>
);

export default AboutPage;
