import React from "react"
import {Segment, Icon} from "semantic-ui-react";
import AboutPage from "./AboutPage";




const Footer = () => (
  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em', textAlign:'center' }}>

    <div>
      <Icon link name='github'  size='big' onClick={() => window.open('https://github.com/B-urb', "_blank")}/>
      <Icon link name='twitter' size='big' onClick={() => window.open('https://twitter.com/BjrnUrb', "_blank")} />
      <Icon link name='xing' size='big' onClick={() => window.open('https://www.xing.com/profile/Bjoern_Urban6/portfolio', "_blank")} />
      <Icon link name='linkedin' size='big' onClick={() => window.open('https://www.linkedin.com/in/bj%C3%B6rn-u-3a9347113/', "_blank")} />
    </div>
    <br/>
    <AboutPage/>
    <br/>
    <br/>
    <p>Thanks for Visiting my Page!</p>
  </Segment>
);


export default Footer;