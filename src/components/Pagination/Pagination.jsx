import React from 'react';
import './Pagination.css'

const Pagination =(props) => {
    return (
        <div className='pagination'>
            {props.bookList.slice(0, Math.ceil(props.bookList.length / 9)).map((el, index) => {
                return (
                    <a className='page_number' onClick={() => {
                        props.SetPage(index)
                    }} href={`#`+index} key={index}>{index + 1}</a>
                )
            })}
        </div>
    );
}

export default Pagination;
