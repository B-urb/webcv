import React from "react"
import {shallow} from "enzyme"
import ResponsiveNavContainer from "./ResponsiveNavContainer"

describe("ResponsiveNavContainer", () => {
    const container = shallow(<ResponsiveNavContainer/>);
    console.log(container.debug());
    it("renders properly", () => {
        expect(container).toMatchSnapshot();
    });

    it("contains an MobileContainer", () => {
       expect(container.find("MobileContainer").exists()).toBe(true);
    });

    it("contains an DesktopContainer", () => {
        expect(container.find("DesktopContainer").exists()).toBe(true);
    });




});