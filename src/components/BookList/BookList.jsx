import React from 'react';
import BookItem from "../BookItem/BookItem";
import './BookList.css'

import Pagination from "../Pagination/Pagination";
import Sorting from "../Sorting/Sorting";



const BookList = (props) => {

    const SetPage = (index) => {
        props.setPageNumber(index)
    }

    return (
        <>
            <div className='sorted_block'>
                <Sorting/>
            </div>
            <div className='book_list'>
                {props.bookList.slice(props.startPage, props.endPage).map((el) => {
                    return (
                        <BookItem
                            author={el.author}
                            img={el.img} key={el.id}
                            addToBasket={props.addToBasket}
                            name={el.name}
                            price={el.price}
                            year={el.year}
                            addToBasketListAction={props.addToBasketListAction}
                        />
                    )
                })}
            </div>
            <Pagination bookList={props.bookList}
                        SetPage={SetPage}
            />
        </>
    );
}

export default BookList;
