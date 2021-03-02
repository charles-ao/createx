import React from 'react';
import styled from 'styled-components';
import background from '../../Images/Interested.svg'

export default function Contact() {
    return (
        <div style={{backgroundImage: window.innerWidth > 1023 ? `url(${background})` : null,
                backgroundColor: window.innerWidth <= 1023 ? '#000000' : null,
                height: window.innerWidth > 768 ? '300px' : null, 
                width: '100%',
                backgroundRepeat: 'no-repeat', 
                backgroundSize: '100% 100%'
        }} >
            <Wrapper>
                <h2>
                Interested to work with Us
                </h2>

                <p>
                Because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain 
                </p>

                <p>
                Of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure
                </p>

                <form>
                    <input type='text' className='inputField' placeholder='Enter your email address'/>
                    <Button>Send</Button>
                </form>
            </Wrapper>
        </div>


    )
}

const Wrapper = styled.div`

    float: right;
    padding: 1% 0 3% 55%;
    h2, p{
        font-family: 'Nunito Sans', sans-serif;
    }

  
    h2{
        color: #072753;
    }
  
    p {
        color: #28384E; 
        line-height: 20px;
        font-size: 15px;
        font-weight: light;
        width: 70%;
    }

    .inputField {
        height: 33px;
        width: 200px;
        border-radius: 5px 0px 0px 5px;
        border-width: 0px;
        border-color: #EDE5D9;
        background-color: #FAF9F7;

    }

    @media only screen and (max-width: 768px) {
        text-align:center;
        padding: 3% 15%;

        p {
            width: 100%; 
        }
        
        .inputField {
            width: 70%;   
        }
    }
  
    @media only screen and (max-width: 320px) {
    
        .inputField {
            width: 90%;   
        }

        button {
            margin-top: 5px;
        }
    }    
`
const Button = styled.button`
    background-color: #FF9C00;
    color: white;
    border-radius: 0px 5px 5px 0px;
    font-size: 15px;
    font-family: 'Nunito Sans', sans-serif; 
    padding: 8px 16px;
    border: none;
    transition: 0.3s;
    
    :hover{
        background-color: #1B498A;
        color: #ffffff;
    }

    :focus {
        border: none !important;
    }
`

