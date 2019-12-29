import React from "react"
import {cleanup,render,RenderResult} from "@testing-library/react"
import LoginForm from "./LoginForm"

let container : RenderResult

beforeEach(()=>{
    container = render(<LoginForm/>)
})

afterEach(cleanup)

it("should render form's inputs, header and button", ()=>{
    const pageDiv = container.getByTestId("login-form")
    const logoHeader = container.getByTestId("header")
    const username = container.getByTestId("username")
    const password = container.getByTestId("password")
    const submitBtn = container.getByTestId("submit-btn")

    expect(pageDiv).toContainElement(logoHeader)
    expect(pageDiv).toContainElement(username)
    expect(pageDiv).toContainElement(password)
    expect(pageDiv).toContainElement(submitBtn)

})
