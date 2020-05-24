import React from 'react';
import './RightBlock.css'
import FilterConnect from "../FilterBlock/FilterContainer";
import BookListContainer from "../BookList/BookListContainer.js";

const RightBLock = () => {
    return (
        <div className='right_block'>
            <FilterConnect/>
            <BookListContainer/>
            <div className='wrap2'>
                <div className='rectangle3'></div>
            </div>

        </div>
    );
};

export default RightBLock;
