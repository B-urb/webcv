import React from 'react'
import {
    Container,
    Header, Segment, Divider, List,Image
} from "semantic-ui-react"

    /* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = () => (
    <Container text>
        <Header
            as='h1'
            content='Björn Urban'
            inverted
            textAlign='center'
            style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
            }}
        />
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
        <Divider/>
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


export default HomepageHeading;