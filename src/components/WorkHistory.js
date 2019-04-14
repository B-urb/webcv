import React from "react"

import {

    Header, Container, List,Image
} from "semantic-ui-react"




const WorkHistory = () => (
<Container fluid>
    <Header inverted>
        Work
    </Header>
    <List inverted size={'massive'} divided>
    <List.Item>
        {/*<Image avatar src='%PUBLIC_URL%/zf_logo.svg' />*/}
<Image style={{fontSize:42}} avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/ZF_logo_STD_Blue_3CC.svg/1024px-ZF_logo_STD_Blue_3CC.svg.png'/>
<List.Content>
<List.Header as='a'>ZF Group</List.Header>
<List.Description>
Apr 2018 - today
</List.Description>
</List.Content>
</List.Item>
<List.Item>
<Image style={{fontSize:42}} avatar src='https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png' />
<List.Content>
<List.Header as='a'>Porsche AG</List.Header>
<List.Description>
Sep 2017 - Mar 2019
</List.Description>
</List.Content>
</List.Item>
<List.Item>
<Image style={{fontSize:42}} avatar src='https://cdn.worldvectorlogo.com/logos/hochtief.svg' />
<List.Content>
<List.Header as='a'>Hochtief AG</List.Header>
<List.Description>
Oct 2015 - Sep 2017
</List.Description>

    <List.Description>
        <List bulleted size={'tiny'}>
            <List.Item>
                Did this
            </List.Item>
            <List.Item>
                Did That
            </List.Item>
        </List>
    </List.Description>
</List.Content>
</List.Item>
</List>
</Container>
);

export default WorkHistory;