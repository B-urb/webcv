import React from 'react'
import {Menu, Sticky, Rail, Icon} from "semantic-ui-react"


const overlayMenuStyle = {
    position: 'relative',
    left: 0,
    transition: 'left 0.5s ease',
};

const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: '2000px',
    top: '300px'
};
class SocialMediaSticky extends React.Component {
    contextRef = React.createRef();
    render() {
        return (
            <div ref={this.contextRef}>
        <Rail attached close position='left'>
            <Sticky contextRef={this.contextRef}>
                <Menu icon='labeled'
                      style={fixedOverlayMenuStyle}
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
            </div>
        );
}
}

export default SocialMediaSticky;