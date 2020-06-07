import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './RightBlock.css'
import BookListContainer from "../BookList/BookListContainer.js";
import GeneralPage from "../GeneralPage/GeneralPage";
import Sorting from "../Sorting/Sorting";
import {BasketContainer} from "../Basket/BasketContainer";

const RightBLock = () => {
    return (
        <div>

            <div className='right_block'>
                <Switch>
                    <Route path='/' exact component={GeneralPage}/>
                    <Route path='/book/:item?' exact component={BookListContainer}/>
                    <Route path='/basket' exact component={BasketContainer}/>
                </Switch>
            </div>
        </div>
    );
}

export default RightBLock;
