import React from "react"
import {cleanup, render, RenderResult} from "@testing-library/react"
import HomeNavBar from "./HomeNavBar"

let container : RenderResult

beforeEach(()=>{
    container = render(<HomeNavBar/>)
})

afterEach (cleanup)

it("Render headers", ()=>{
    const navbarDiv = container.getByTestId("navbar")
    const nameHeader = container.getByTestId("name-header");
    const createAccount = container.getByTestId("create-account");
    const getHelp = container.getByTestId("get-help")

    expect(navbarDiv).toContainElement(nameHeader);
    expect(navbarDiv).toContainElement(createAccount);
    expect(navbarDiv).toContainElement(getHelp);

})