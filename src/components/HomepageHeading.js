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




);


export default HomepageHeading;