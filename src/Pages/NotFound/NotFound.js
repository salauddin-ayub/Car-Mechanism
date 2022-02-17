import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.jpg';
import './NotFound.css';


const NotFound = () => {
    return (
        <div class="pic">
            <img src={error} alt="" />
            <Link to="/">
            <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;