import React from "react";
import Dashboard from "./Dashboard"
import {render, cleanup, RenderResult} from "@testing-library/react";

let container : RenderResult;

beforeEach (()=>{
    container = render(<Dashboard/>)
})

afterEach(cleanup);

it("render the header", () => { 
    const welcomeToHeader = container.getByTestId("welcome-to");
    const funFactsHeader = container.getByTestId("funfacts")
    
    expect(welcomeToHeader).toContainHTML("Welcome to");
    expect(funFactsHeader).toContainHTML("FunFacts!");
});