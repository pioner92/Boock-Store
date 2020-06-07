import React from 'react';
import './PopularBook.css'
import {PopularBookListContainer} from "./PopularBookList/PopularBookListConteiner";

const PopularBook = () => {
    return (
        <div className='popular_book'>
            <div className='popular_book_title'>
                <span>Популярные</span>
            </div>
            <div className='popular_book_items'>
              <PopularBookListContainer/>
            </div>

        </div>
    );
};

export default PopularBook;
