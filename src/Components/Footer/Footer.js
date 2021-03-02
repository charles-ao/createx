import React from 'react';
import styled from 'styled-components';
import background from '../../Images/footer_bcg.png';
import Logo from '../../Images/Logo.svg';



export default function Footer() {
    return (
        <div style={{ backgroundImage:  `url(${background})` ,
                        height: window.innerWidth > 100 ? '250px' : null,
                        paddingTop: '10px',
                        width: '100%',
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: '100% 100%',
                    }}>
            <Wrapper>
                <div className='col'>
                    <img src={Logo} alt='CreateX' style={{width: '30px'}}/>
                    <h4>CreateX</h4>
                    <p>On the other hand, we denounce with righteous indignation and dislike men.</p>

                    <h5>Interested To Work With Us</h5>
                    <form>
                        <input type='text' className='inputField' placeholder='Enter your email address'/>
                        <Button>Send</Button>
                    </form>
                </div>


                <div className='col rem'>
                    <h5>
                        Company
                    </h5>
                    <ul>
                        <li>About Us</li>
                        <li>Portfolio</li>
                        <li>Page</li>
                        <li>Review</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className='col rem'>
                    <h5>
                        Support
                    </h5>
                    <ul>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Term of Use</li>
                        <li>Review</li>
                        <li>Buy & Sell</li>
                    </ul>  
                </div>

                <div className='col rem'>
                    <h5>
                        Contact
                    </h5>
                    <ul>
                        <li>No. 21, Boulevard Street</li>
                        <li>Oshodi, Lagos</li>
                        <li>Nigeria</li>
                        <li>info@createx.com.ng</li>
                        <li>+ 141 826476268</li>
                    </ul>
                </div>

              

            </Wrapper>
            <footer>Designed by: <strong>Agency Zone</strong> & Built By: <strong>Adedunmola</strong>  2021</footer>
        </div>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 10px;
    

    h4{
        font-family: 'Barlow', sans-serif;
    }

    h5{
        font-family: 'Nunito Sans', sans-serif;
        font-weight: bold;
        font-size: 15px;

    }

    h4, h5 {
        color: #ffffff;
    }

    p, li {
        font-family: 'Nunito Sans', sans-serif;
        line-height: 20px;
        font-size: 13px;
        font-weight: light;
        color: #A9B2BC;
    }

    h4{
        display: inline;
    }

    .col{
        display: inline;
        margin: 0px auto;
    }

    .inputField {
        height: 33px;
        width: 200px;
        border-radius: 5px 0px 0px 5px;
        border-width: 0px;
        border-color: #ffffff;
        background-color: #ffffff;

    }

    .col > p {
        width: 250px;
    }

    ul {
        list-style-type: none;
        padding-left:0;
    }

    li:hover {
        text-decoration: underline;
    }



    @media only screen and (max-width: 430px) {
        .rem {
            display: none;
        }
    }

`
// const Button = styled.button`
//     background-color: #1B498A;
//     padding-bottom: 10px;

    

const Button = styled.button`
    background-color: #1B498A;
    color: white;
    border-radius: 0px 5px 5px 0px;
    font-size: 15px;
    font-family: 'Nunito Sans', sans-serif; 
    padding: 9px 16px;
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