import './styles.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectQuote } from '../features/style/styleSlice';

export default function Footer(){
    const quote = useSelector(selectQuote);

    return (
        <div className="footer fixed-bottom">
            <p className='mb-1'>{quote.quote}</p>
            <p className='mb-1'>-{quote.author}</p>
        </div>
    );
}