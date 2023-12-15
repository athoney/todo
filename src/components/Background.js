import './styles.css';
import { fetchPhoto } from '../util/photoAPI';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeBackground, changeQuote } from '../features/style/styleSlice';
import quotes from "../util/quotes.json";

export default function Background() {
    const dispatch = useDispatch();


    function handleClick() {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        dispatch(changeQuote(quote));
        // fetchPhoto().then((photo) => {
        //     dispatch(changeBackground(photo.urls.raw));
        // });
        dispatch(changeBackground());
    }

    return (
        <div className='background'>
            <button className="btn btn-light" onClick={handleClick} id="background">
                <i className="bi bi-arrow-clockwise"></i>
            </button>

            <div className="btn-group dropup" role="group" id="note-color">
                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-palette"></i>

                </button>
                <ul className="dropdown-menu text-end">
                    <li><a className="dropdown-item" href="#">Random</a></li>
                    <li>
                        <input className="me-3" type="color" id="color-picker"  />
                    </li>
                </ul>
            </div>
        </div>
    )
}