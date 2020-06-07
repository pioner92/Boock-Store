import React from 'react';
import {NewsBookListContainer} from "./NewsBoockList/NewsBookListContainer";
import './NewBook.css'

const NewsBook = () => {
    return (
        <div className='new_book'>
            <div className='new_book_title'>
                <span>Новинки</span>
            </div>
            <div className='new_book_items'>
                <NewsBookListContainer/>
            </div>
        </div>
    );
};

export default NewsBook;
