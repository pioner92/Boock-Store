import React from 'react';
import './Content.css'
import RightBLock from "../RightBlock/RightBLock";
import {NavigationContainer} from "../Navigation/NavigationContainer";


const Content = () => {
    return (
        <div className='content'>
            <NavigationContainer/>
            <RightBLock/>

        </div>
    );
};

export default Content;
