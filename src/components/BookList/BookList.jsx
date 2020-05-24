import React, {useEffect} from 'react';
import BookItem from "../BookItem/BookItem";
import './BookList.css'
import {BooksLoad} from "../../util/BooksLoad";

const BookList = (props) => {

    useEffect(() => {
        BooksLoad()
    }, [])
    return (
        <div className='boock_list'>
            {props.boockList.map((el) => {
                return (
                    <BookItem author={el.author} img={el.img} key={el.id} addToBasket={props.addToBasket}
                              name={el.name} price={el.price}/>
                )
            })}


        </div>
    );
};

export default BookList;
