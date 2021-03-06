import styled from "styled-components"

export const ManageFriendsDiv = styled.div `
display:flex;
flex-wrap:wrap;
flex-direction:row;
width:60%;
margin: 1em auto;
padding-bottom:3em;

`

export const ManageFriendsHeader = styled.h1 `
font-size:3em;
text-align:center;
`

export const FriendDiv = styled.div `
flex-direction:column;
background-color:#f8f8f8;
margin:1em;
align-items:center;
`

export const FriendImg = styled.img `
width:10em;
align-self:center;
justify-self:center;

`

export const FriendName = styled.h3 `
font-size:1.5em;
`
export const NoFriends = styled.h1 `
font-size:2em;
text-align:center;
margin:3em auto;
`

export const AddFriendDiv = styled.div `
background-color:#f8f8f8;
border-radius:5px;
border: 1px solid black
width:20%;
margin:auto;
display:flex;
padding:0.25em;
justify-content:center;
`

export const AddFriendInput = styled.input `
width:50%;
margin:auto 1em auto 1em;
`

export const FriendSearchDiv = styled.div `
width:20%;
margin:auto;
display:flex;
flex-direction:column;
`
