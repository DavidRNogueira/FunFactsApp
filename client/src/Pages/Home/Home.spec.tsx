import React from "react";
import {cleanup,render, RenderResult} from "@testing-library/react";
import Home from "./Home";

let container : RenderResult

beforeEach(()=>{
    container = render(<Home/>)
});

afterEach(cleanup);

it("contain the navbar and form",()=>{
    const homeDiv = container.getByTestId("home-div")
    const homeNavBar = container.getByTestId("home-navbar")
    const form = container.getByTestId("form")

    expect(homeDiv).toContainElement(form)
    expect(homeDiv).toContainElement(homeNavBar)
})
1





            