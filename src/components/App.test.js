import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {

    const app = shallow(<App/>);

    it("renders properly", () => {
       expect(app).toMatchSnapshot();
    });

    it("contains a nav bar container component",() => {
        expect(app.find("ResponsiveNavContainer").exists()).toBe(true);
    });
    it("contains an Introduction component",() => {
        expect(app.find("Introduction").exists()).toBe(true);
    });
    it("contains a WorkExperience component",() => {
        expect(app.find("WorkExperience").exists()).toBe(true);
    });

    it("contains a EducationHistory component",() => {
        expect(app.find("EducationHistory").exists()).toBe(true);
    });
    it("contains a Footer component",() => {
        expect(app.find("Footer").exists()).toBe(true);
    });
    

});
