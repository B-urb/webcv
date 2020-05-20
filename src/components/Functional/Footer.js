import React from "react"
import {Segment, Grid} from "semantic-ui-react";
import AboutPage from "./AboutPage";

const Footer = () => (
  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
<Grid columns={2} divided>
  <Grid.Column>
    <AboutPage/>
  </Grid.Column>
  <Grid.Column>
    <p>HIII</p>
  </Grid.Column>
</Grid>
  </Segment>
);


export default Footer;