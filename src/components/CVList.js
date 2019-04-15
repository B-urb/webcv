import React from "react"
import PropTypes from "prop-types"
import {

    Header, Container, List,Image
} from "semantic-ui-react"


const CVList = ({header,items}) => (
    <Container fluid>
        <Header inverted>
            {header}
        </Header>
        <List inverted size={'massive'} divided>
            {items.map((item,key) =>
            <List.Item key={key}>
                <Image style={{fontSize:42}} avatar src={item.image} />
                <List.Content>
                    <List.Header as='a'>{item.institution}</List.Header>
                    <List.Description>
                        {item.period}
                    </List.Description>

                    <List.Description>
                        {item.facts.length > 0 ?
                            <List bulleted size={'tiny'}>
                                {item.facts.map((inner_item, inner_key) =>
                                    <List.Item key={inner_key}>
                                        {inner_item}
                                    </List.Item>
                                )}
                            </List> : null
                        }

                    </List.Description>
                </List.Content>
            </List.Item>)}
        </List>
    </Container>
);

CVList.propTypes = {
    header: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
};

export default CVList