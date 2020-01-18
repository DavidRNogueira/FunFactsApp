import React,{FC, useState} from "react";
import {
    LoginDiv,
    LoginHeader,
    Form,
    TextInput,
    SecondaryButton,
    FormLabels,
    PrimaryButton,
    AccountCreated,
    Error,
    RegisterHeader
} from "./LoginFormStyles"
import Axios from "axios";
import {useDispatch} from "react-redux"
import { history } from "../../App";
import allActions from '../../Actions'

const LoginForm:FC = ():JSX.Element =>{

    const [errors, setErrors] = useState<string[]>([])
    const [username,setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isRegistering, setIsRegistering] = useState<Boolean>(false)
    const [isCreated, setIsCreated] = useState<Boolean>(false)

    const dispatch = useDispatch();

    const handleLogin = async (event: React.FormEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        let errors:string[] = []
        const payload = {
            username,
            password
        }

    try {
        const response = await Axios.post("/auth/login", payload)
        if (response.status === 200){
            dispatch({type:"SET_USER_INFO", payload})
            history.push('/dashboard')
        }
    }
    catch(error){
        errors.push("unknown")
        console.log('error')
    } 
}

    const handleRegister = async (event: React.FormEvent<HTMLButtonElement>) => {
        let errors:string[] = []

        if (password !== confirmPassword){
            errors.push('password')
            setErrors(errors);
            return;
        }

        const payload = {
            username,
            password,
            firstName,
            lastName,
            email
        }
        try {
            const response = await Axios.post('/auth/register', payload)
            if (response.status === 200){
                setIsRegistering(false);
                setIsCreated(true);
            }
        }
        catch(error){
            errors.push("unknown")
        }
        
            if (errors.length > 0){
            setErrors(errors)
                }
    }

    switch(isRegistering){
        default: {
            return(<h1>Error</h1>)
        }
        case(false):
        return(<LoginDiv data-testid="login-form">
            <LoginHeader data-testid="header">Login</LoginHeader>
            <Form>
                <FormLabels  data-testid="username">Username</FormLabels>
                <TextInput type="text" onChange={(e:React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)}/>
                
                <FormLabels data-testid="password">Password</FormLabels>
                <TextInput type="password" onChange={(e:React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}/>
              
                    <PrimaryButton  data-testid="submit-btn" onClick={(e:React.FormEvent<HTMLButtonElement>) => handleLogin(e)}>Login</PrimaryButton>
                    <SecondaryButton onClick={(e:React.FormEvent<HTMLButtonElement>) => setIsRegistering(true)}>Create Account</SecondaryButton>

                {
                    isCreated && <AccountCreated>Your account has been created successfully!</AccountCreated>
                }
                {
                    errors.includes("unknown") && <Error>Ops! Something went wrong. Try again!</Error>
                }
            </Form>
           
        </LoginDiv>
        )

        case(true):
        return(
        <LoginDiv data-testid="login-form">
            <RegisterHeader data-testid="header">Create Account</RegisterHeader>
            <Form>
                <FormLabels>First Name</FormLabels>
                <TextInput type="text" onChange={(e:React.FormEvent<HTMLInputElement>) => setFirstName(e.currentTarget.value)}/>
                
                <FormLabels>Last Name</FormLabels>
                <TextInput type="text" onChange={(e:React.FormEvent<HTMLInputElement>) => setLastName(e.currentTarget.value)}/>

                <FormLabels>Email</FormLabels>
                <TextInput type="text" onChange={(e:React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}/>
                
                <FormLabels  data-testid="username">Username</FormLabels>
                <TextInput type="text" onChange={(e:React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)}/>
                
                <FormLabels data-testid="password">Password</FormLabels>
                <TextInput type="password" onChange={(e:React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}/>
                
                <FormLabels data-testid="password">Confirm Password</FormLabels>
                <TextInput type="password" onChange={(e:React.FormEvent<HTMLInputElement>) => setConfirmPassword(e.currentTarget.value)}/>
                {
                    errors.includes('password') && <Error>Your passwords do not match.</Error>
                }
                
                <PrimaryButton  data-testid="submit-btn" onClick={(e:React.FormEvent<HTMLButtonElement>) => handleRegister(e)}>Create Account</PrimaryButton>
                <SecondaryButton  data-testid="submit-btn" onClick={(e:React.FormEvent<HTMLButtonElement>) => setIsRegistering(false)}>Cancel</SecondaryButton>
            </Form>
           
        </LoginDiv>)
    }
        
    
}

export default LoginForm