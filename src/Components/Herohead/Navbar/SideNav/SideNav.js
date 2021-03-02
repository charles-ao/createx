import React from 'react'
import styled from 'styled-components'

export default function SideNav() {
    return (
        <Wrapper>
                <a href='/'>Home</a>
                <a href='/'>Our Work</a>
                <a href='/'>About Us</a>
                <a href='/'>Review</a>
                <a href='/'>Contact Us</a>      

                <Button>Say Hi!</Button>
          
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-image: inherit;
    padding-bottom: 15px;

    a {
        display: block;
        color: white;
        text-decoration: none;
        margin: 10px 0px 10px 20px;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 13px;
        padding-left: 20px;
        color: #FF9C00;   
     }

    a:hover, a:active {
        color: #FF9C00;
    }
    
`
const Button = styled.button`
    background-color: #FF9C00;
    color: white;
    border-radius: 5px 5px 5px 5px;
    font-size: 12px;
    font-family: 'Nunito Sans', sans-serif; 
    padding: 8px 10px;
    border: none;
    transition: 0.3s;
    height: 25px;
    width: 70px;
    margin-left: 28px;
    :hover{
        background-color: #ffffff;
        color: #1B498A;
    }

    :focus {
        border: none !important;
    }
`