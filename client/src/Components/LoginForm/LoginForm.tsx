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
        <LoginDiv>
            <LoginHeader>Login</LoginHeader>
            <Form>
            <FormLabels>Username</FormLabels>
            <TextInput type="text"/>
            <FormLabels>Password</FormLabels>
            <TextInput type="text"/>
            <LoginButton>Login</LoginButton>
            </Form>
           
        </LoginDiv>
    )
}

export default LoginForm