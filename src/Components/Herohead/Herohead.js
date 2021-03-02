import React from 'react';
import Navbar from './Navbar/Navbar';
import background from '../../Images/LandingHome.png'; 
import styled from 'styled-components';

function Herohead() {
    return (
        <div   style={{ backgroundImage: window.innerWidth > 768 ? `url(${background})` : null,
                        backgroundColor: window.innerWidth <= 768 ? '#072753' : null, 
                        height: window.innerWidth > 768 ? '650px' : null, 
                        width: '100%',
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: '100% 100%',
                    }}>
            <Navbar />
            <Wrapper>
                <h1>We Build Brands That Lead & Inspire</h1>
                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled 
                    and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
                    forsee the pain and trouble.
                </p>
                <Button>Read More</Button>
            </Wrapper>   
        </div>

    )
}

const Wrapper = styled.div`
    border: 0px solid red;
    margin-left: 18%;
    padding-top: 14%;
    width: 45%;
    color:white;

    h1 {
        font-size: 40px;
        font-weight: bold;
        font-family: 'Nunito Sans', sans-serif;
    }

    p {
        margin-bottom: 25px;
        line-height: 25px;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 15px;
        font-weight: light;
        width: 90%;
    }

    @media only screen and (max-width: 1024px) {
        margin-left: 15%;
        padding-top: 20%;
        width: 45%;

        h1 {
            font-size: 35px;
        }
    
        p {
            margin-bottom: 25px;
            font-size: 10px;
            width: 90%;
        }
    
    }

    @media only screen and (max-width: 768px) {
        margin: 0 auto 3% auto;
        width: 80%;
        padding-top: 18%;
        text-align: center;

        h1 {
            font-size: 35px;
        }
    
        p {
            font-size: 10px;
            width: 80%;
            text-align: center;
            margin: 0  auto 25px auto;
        }

        button {
            margin-bottom: 10%;    
        }
  
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
export default Herohead;
