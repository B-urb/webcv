import React from 'react'
import {Menu,   Sticky, Rail, Icon} from "semantic-ui-react"


function SocialMediaSticky(){

    return (
        <Rail attached close position='right'>
            <Sticky active={true}>
                <Menu icon='labeled'
                      vertical
                >
                    <Menu.Item>
                        <Icon name='twitter' />
                        Twitter
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='facebook' />
                        Share
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='mail' />
                        Email
                    </Menu.Item>
                </Menu>
            </Sticky>
        </Rail>
        );
}

export default SocialMediaSticky;