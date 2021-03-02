import React from 'react';
import styled from 'styled-components';
import Service from './Service/Service';
import serviceData from '../../serviceData'

function Card(cont) {
    return (<Service 
        key= {cont.id} 
        imgURL={cont.imgSRC}
        title={cont.title}
        description={cont.description}
        imgLNK={cont.imgLNK}
    />)
}

export default function Services() {
    return (
        <Wrapper>
            <div className='subheading'>
                <h2>Our Services</h2>
                <p>That are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</p>
            </div>
            <div className='flexbox'>
                {serviceData.map(Card)}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-bottom: 2%;
    h2, p, h4{
        font-family: 'Nunito Sans', sans-serif;
    }

    a {
        color: #1B498A;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
      }

    h2, h4 {
        color: #072753;
    }

    p {
       color: #28384E; 
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

    @media only screen and (max-width: 430px) {
        .flexbox {
            display: block;

        }

        .flexbox > div {
            width: 85%;
            margin: 20px auto;
            text-align: center;
        }

    }
`
