import React, {Component} from "react";
import ResponsiveNavContainer from "./ResponsiveNavContainer";
import Introduction from "./Introduction";
import EducationHistory from "./EducationHistory";
import WorkExperience from"./WorkExperience";
import Footer from "./Footer";

class App extends Component {
    render(){
        return(
            <ResponsiveNavContainer>
                <Introduction/>
                <EducationHistory />
                <WorkExperience />
                <Footer />
            </ResponsiveNavContainer>
        )
    }

}

export default App;