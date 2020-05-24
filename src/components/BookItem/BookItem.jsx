import React from 'react';
import './BookItem.css'


const BookItem = (props) => {
    const addToBasket = () => {
        props.addToBasket(props.price)
    }

    return (
        <div className='boock_item'>
            <img src={props.img} alt=""/>
            <span>{props.name}</span>
            <span className='author'>Автор: {props.author}</span>
            <span className='price'>Цена: {props.price} $</span>
            <button onClick={addToBasket}>Купить</button>
        </div>
    );
};

export default BookItem;
