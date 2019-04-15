import React, {Component} from "react";
import {Container, Segment, Divider} from "semantic-ui-react"
import HomepageHeading from "./HomepageHeading"
import CVList from "./CVList.js"


const work_items = [
    {
        "image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/ZF_logo_STD_Blue_3CC.svg/1024px-ZF_logo_STD_Blue_3CC.svg.png',
        "institution": 'ZF Group',
        "period": "Apr 2018 - today",
        "facts": ["Software development and software architecture in the field of driver assistance systems",
        "Creation of simulation scenarios for Software-in-the-Loop test of ADAS software"]
    },

    {
        "image": 'https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png',
        "institution": 'Porsche AG',
        "period": "Sep 2017 - Mar 2019",
        "facts": ["Creation of a data-lake development environment and data analysis with machine learning",
            "Test coordination and agile project management in the area of in-car online services",
        "Conception and development of microservices"]
    },
    {
        "image": 'https://cdn.worldvectorlogo.com/logos/hochtief.svg',
        "institution": 'Hochtief AG',
        "period": " Oct 2015 - Sep 2017",
        "facts": ["Development and design in MS SharePoint environment with web technologies and frameworks like React and Angular",
            "Independent project management",
        "Development of tools for document migration"]
    }

];

const education_items = [
    {
        "image": 'https://www.xing.com/img/custom/cp/assets/logo/2/4/1/12865/square_512px/UNI_Bonn_Logo_Standard_RZ_L.jpg',
        "institution": 'Rheinische Friedrichs Wilhelms Universität Bonn',
        "period": "Apr 2018 - today",
        "facts": []
    },

    {
        "image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Ruhr-Universit%C3%A4t_Bochum_logo.svg/2000px-Ruhr-Universit%C3%A4t_Bochum_logo.svg.png',
        "institution": 'Ruhr-Universität Bochum',
        "period": "Oct 2014 - Oct 2017",
        "facts": []
    }

];

class App extends Component {
    render(){
        return(
            <Segment style={{height:"100vh",backgroundColor:"rgb(59, 37, 37)"}}>
            <Container style={{width:"80vw"}}>
            <HomepageHeading/>
            <CVList header={"Work"} items={work_items}/>
                    <Divider inverted/>
            <CVList items={education_items} header={"Education"}/>
            </Container>
            </Segment>

        )
    }

}

export default App;