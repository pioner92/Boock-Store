import React from 'react';
import './Content.css'
import Navigation from "../Navigation/Navigation";
import RightBLock from "../RightBlock/RightBLock";

const Content = () => {
    return (
        <div className='content'>
            <Navigation/>
            <RightBLock/>
        </div>
    );
};

export default Content;
