import React from 'react';
import { useState } from 'react'
import Button from './Button'
import quotes from '../quotes.json'
import '../styles.css'


const QuoteBox = () => {
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
        const [index, setIndex] = useState(randomIndex);

    const changeStatus = () =>{
        const randomIndex = Math.floor(Math.random() * quotes.length)
            setIndex(randomIndex);
}

    const colors =  ['#001219','#005F73', '#0A9396', '#b7094c',
                        '#EE9B00', '#CA6702', '#BB3E03', '#AE2012', '#9B2226'];

    const randomColors = Math.floor(Math.random() * colors.length);
        document.body.style =  `background-color: ${colors[randomColors]};
                                        color: ${colors[randomColors]};`

    return (
        <div className='styles-container'>
            <div className='card'>
                <div className='quotes-container'>
                    <i class="fa-solid fa-quote-left"></i>
                    <p className='quotes'>{quotes[index].quote}</p>
                </div>
                <p className='author'>{quotes[index].author}</p>
                <Button changeStatus={changeStatus} colorsBtn={colors[randomColors]}/>
            </div>
        </div>
    );
};

export default QuoteBox;