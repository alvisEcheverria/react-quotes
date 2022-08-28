import React from 'react';
import { useState } from 'react'
import '../styles.css'

const Button = ({changeStatus, colorsBtn}) => {
    return (
        <div className='btn-container'>
            <button className='btn' onClick={changeStatus} style={{backgroundColor: colorsBtn}}><i class="fa-solid fa-angle-right"></i></button>  
        </div>
    );
};

export default Button;