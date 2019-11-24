import React,{FC} from "react";
import {
    LoginDiv,
    LoginHeader,
    Form,
    TextInput,
    LoginButton,
    FormLabels
} from "./LoginFormStyles"

const LoginForm:FC = ():JSX.Element =>{
    return(
        <LoginDiv data-testid="login-form">
            <LoginHeader data-testid="header">Login</LoginHeader>
            <Form>
            <FormLabels data-testid="username">Username</FormLabels>
            <TextInput type="text"/>
            <FormLabels data-testid="password">Password</FormLabels>
            <TextInput type="text"/>
            <LoginButton data-testid="submit-btn">Login</LoginButton>
            </Form>
           
        </LoginDiv>
    )
}

export default LoginForm