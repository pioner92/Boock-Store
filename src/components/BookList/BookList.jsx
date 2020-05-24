import React, {useEffect} from 'react';
import BookItem from "../BookItem/BookItem";
import './BookList.css'
import {BooksLoad} from "../../util/BooksLoad/BooksLoad";


const BookList = (props) => {

    const SetPage = (index) => {
        props.setPageNumber(index)
    }

    useEffect(() => {
        BooksLoad()
    }, [])
    return (
        <>
            <div className='book_list'>
                {props.bookList.slice(props.startPage, props.endPage).map((el) => {
                    return (
                        <BookItem author={el.author}
                                  img={el.img} key={el.id}
                                  addToBasket={props.addToBasket}
                                  name={el.name}
                                  price={el.price}
                        />
                    )
                })}
            </div>
            <div className='pagination'>
            {props.bookList.slice(0, Math.ceil(props.bookList.length / 9)).map((el, index) => {
                return (
                    <a className='page_number' onClick={() => {
                        SetPage(index)
                    }} href="#" key={index}>{index + 1}</a>
                )
            })}
            </div>
        </>
    );
};

export default BookList;
