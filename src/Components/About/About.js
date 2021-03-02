import React from 'react';
import background from '../../Images/We_Are_Hear.svg'; 
import styled from 'styled-components';

function About() {
    return (
        <div   style={{ backgroundImage: window.innerWidth > 1023 ? `url(${background})` : null,
                        backgroundColor: window.innerWidth <= 1023 ? '#00000' : null, 
                        height: window.innerWidth > 768 ? '300px' : null, 
                        width: '100%',
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: '100% 100%',
                    }}>
            <Wrapper>
                <div className='content'>
                    <h2>We Are Hear To Help You With</h2>

                    <p>must explain to you how all this mistaken idea of denouncing pleasure and
                        praising pain was born and i will give you a complete account of the system, and 
                        expound the teachings of the great explorer
                    </p>

                    <p>
                        Of the truth, the master builder of the human happiness. No one rejects, dislikes or avoids
                    </p>

                    <Button>Read More</Button>
                </div>
            </Wrapper>   
        </div>

    )
}

const Wrapper = styled.div`
padding: 3% 15%;
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
   width: 50%
}

@media only screen and (max-width: 768px) {
    text-align:center;
    p {
        width: 100%; 
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
        background-color: #1B498A;
        color: #ffffff;
    }

    :focus {
        border: none !important;
    }
`

export default About;
