import React, { useState } from 'react';
import Logo from '../../../Images/Logo.svg';
import Hamburger from '../../../Images/Hamburger.svg'
import styled from 'styled-components';
import SideNav from './SideNav/SideNav'


export default function Navbar() {
    // let status = false;  

    // function toggleBar(){
    //     status = !status;
    //     console.log(status);
    // }

    
    const [status, setStatus] = useState(false)
    
    function toggleBar(){
        setStatus(!status)
    }

    return (
        window.innerWidth > 768 ?
        <Wrapper>
            <div className='Hero'>
                <img src={Logo} alt='CreateX' style={{width: '30px'}}/>
                <h2>CreateX</h2>
            </div>

            <nav>                
                <a href='/'>Home</a>
                <a href='/'>Our Work</a>
                <a href='/'>About Us</a>
                <a href='/'>Review</a>
                <a href='/'>Contact Us</a>                
            </nav>

            <Button>Say Hi!</Button>
        </Wrapper>
        :
        <MobileWrapper>
            <div className='Hero'>
                <img src={Logo} alt='CreateX' style={{width: '30px'}} />
                <h2>CreateX</h2>
            </div>
            <img className='p01' src={Hamburger} alt='Hamburger' onClick={toggleBar}/>
            <div>
            {status ? <SideNav/> : null}
            </div>
            
        </MobileWrapper>
        
    )
}

const Wrapper = styled.div`
    color: white;
    text-align: center;
    position: fixed;
    width: 100vw;
    top:0;
    background-image: inherit;
    padding-bottom: 8px;

    a {
        color: white;
        text-decoration: none;
        margin: 0px 20px;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 13px;
    }

    a:hover, a:active, h2:hover {
        color: #FF9C00;
    }

    h2, .Hero, nav {
        display: inline;
    }

    h2{
        font-family: 'Barlow', sans-serif;
    }

    img {
        padding-top: 10px;
    }

    nav {
        margin-left: 15%;
        margin-right: 12%;

    }

    @media only screen and (max-width: 1024px) {
        a {
            margin: 0px 15px;
            font-size: 12px;
        }
    
        nav {
            margin-left: 13%;
            margin-right: 10%;
        }
    }
`
const MobileWrapper = styled.div`
    color: white;
    padding: 2% 1.5%;
    position: fixed;
    width: 100vw;
    background-color: inherit;
 
    h2, .Hero{
        display: inline;
    }

    h2{
        font-size: 20px;
    }

    .p01 {
        float: right;
        padding-right: 3%
    }

`
const Button = styled.button`
    background-color: #FF9C00;
    color: white;
    border-radius: 5px 5px 5px 5px;
    font-size: 15px;
    font-family: 'Nunito Sans', sans-serif; 
    padding: 8px 16px;
    border: none;
    transition: 0.3s;
    
    :hover{
        background-color: #ffffff;
        color: #1B498A;
    }

    :focus {
        border: none !important;
    }
`