/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>This is Home page</h2>
            <Link to='/single-state'>
            State with  Signal  hook
            </Link>
        </div>
    );
};

export default Home;