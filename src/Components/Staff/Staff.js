import React, {useState} from 'react';
import styled from 'styled-components';
import Logo1 from '../../Images/booking.com.svg'
import Logo2 from '../../Images/instacart.svg'
import Logo3 from '../../Images/paypal.svg'
import Logo4 from '../../Images/google.svg'
import staffData from '../../staffData'

export default function Staff() {
    const [state, setstate] = useState(0);

    function increase(){
        if (state < staffData.length-1) {
            setstate(state + 1) 
        }       
    }

    function decrease(){
        if (state > 0) {
            setstate(state - 1) 
        } 
    }

    return (
        <Wrapper>
            <div className='col'>
                <img src={staffData[state].image} alt='staff'/>
            </div>

            <div className='col'>
                <h5>{staffData[state].fullName}</h5>

                <p id='P01'>{staffData[state].positon}</p>

                <p>
                    {staffData[state].description}
                </p>

                <Button onClick={decrease}>&lt;</Button>
                <Button onClick={increase}>&gt;</Button>

            </div>

            <div className='logcard'>
                <img src={Logo1} className='Logo' alt='logo'/>
                <img src={Logo2} className='Logo' alt='logo'/>
                <img src={Logo3} className='Logo' alt='logo'/>
                <img src={Logo4} className='Logo' alt='logo'/>                
            </div>

         
        </Wrapper>
    )  
}

const Wrapper = styled.div `
    padding: 5% 10%;
    display: flex;
    flex-wrap: wrap;
    h5, p {
        font-family: 'Nunito Sans', sans-serif;
        color: #072753;
    }

    p {
        line-height: 20px;
        font-size: 15px;
        font-weight: light;
    }

    img {
        width: 90%
    }

    .col{
        width: 50%;
        display: inline;
    }

    #P01 {
        font-size: 13px;
    }

    .logcard{
        margin 20px auto 0px;
    }

    .Logo {
        width: 100px;
        margin: 0px 45px;
    }

    @media only screen and (max-width: 769px) {

        .Logo {
            width: 80px;
            margin: 0px 20px;
        }
    }

    @media only screen and (max-width: 425px) {
        .col{
            width: 80%;
            display: block;
            margin: 0px auto;
        }

        h5 {
            text-align: center;
        }

        #P01 {
            text-align: center;
        }

        .Logo {
            width: 50px;
            margin: 0px 5px;
        }
    }

`

const Button = styled.button `
    border: 2px solid #1B498A;
    border-radius: 50px;
    color: #FF9C00;
    font-weight: bolder;
    background-color: #ffffff;   
    width: 40px;
    height: 40px;
    padding: 0px 0px;
    margin: 2px 5px;

    :hover {
        background-color: #1B498A;
        color: #ffffff;
    }

    :active {
        border: 2px solid #1B498A;
        border-radius: 50px;
        background-color: #1B498A;
        color: #ffffff;
    }
`