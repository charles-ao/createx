import React from 'react';



export default function Service(props) {
    return (
        <div>
            <img src={props.imgURL} alt=''/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <a href='/'>Learn More <img src={props.imgLNK} alt='Learn more'/></a>
        </div>
    )
}
