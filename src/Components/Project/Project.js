import React from 'react';
import styled from 'styled-components';
import background from '../../Images/background.png'; 
import Arrow from '../../Images/Learn More 2.svg';
import card1 from '../../Images/card1.svg';
import card2 from '../../Images/card2.svg';
import card3 from '../../Images/card3.svg';



export default function Project() {
    return (
        <div style={{ backgroundImage: window.innerWidth > 767 ? `url(${background})` : null,
                        backgroundColor: window.innerWidth <= 767 ? '#4e8fb6' : null, 
                        height: window.innerWidth > 768 ? '620px' : null,
                        marginTop: '20px',
                        width: '100%',
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: '100% 100%',
                    }}>
            <Wrapper>
                <div className='subheading'>
                    <h2>Our Latest Projects</h2>
                    <p>That are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</p>
                </div>
                <div className='flexbox'>
                    <div>
                        <img src={card1} className='card' alt=''/>
                        <h5>Business & Corporate</h5>
                        <p>Find fault with a man who chooses to enjoy a pleasure</p>
                        <a href='/'>Learn More <img src={Arrow} alt='Learn more'/></a>
                    </div>
                    <div>
                        <img src={card2} className='card' alt=''/>
                        <h5>Food & Restaurant</h5>
                        <p>Every pleasure is to be welcomed forenight daily</p>
                        <a href='/'>Learn More <img src={Arrow} alt='Learn more'/></a>
                    </div>
                    <div>
                        <img src={card3} className='card' alt=''/>
                        <h5>Travel & Tourism</h5>
                        <p>Owing to the claims of duty or the obligations of business</p>
                        <a href='/'>Learn More <img src={Arrow} alt='Learn more'/></a>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
padding-top: 20px;
h2, p, h5{
    font-family: 'Nunito Sans', sans-serif;
}

a {
    color: #FF9C00;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

h2, h5 {
    color: #ffffff;
}

.card {
    width: 250px
}

p {
   color: #ffffff; 
   line-height: 20px;
   font-size: 15px;
   font-weight: light;

}

.flexbox {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 10%;
}

.flexbox > div {
    width: 25%;
    margin: 10px auto;
    text-align: left;
}

@media only screen and (max-width: 768px) {
    margin-top: 45%;
    .card {
        width: 150px
    }

@media only screen and (max-width: 430px) {
    margin-top: 100%;

    .flexbox {
        display: block;

    }

    .flexbox > div {
        width: 85%;
        margin: 20px auto;
        text-align: center;
    }

    .card {
        width: 200px
    }

    @media only screen and (max-width: 375px) {
        margin-top: 125%;
    }

    @media only screen and (max-width: 325px) {
        margin-top: 150%;
    }
`