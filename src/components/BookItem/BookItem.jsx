import React from 'react';
import './BookItem.css'
import loader from '../../static/loader/Gear-0.3s-114px.svg'



const BookItem = (props) => {
    const addToBasket = () => {
        props.addToBasket(props.price)
        props.addToBasketListAction(props.name)
    }

    return (
        <div className='book_item'>
            <div className='book_image'>
                {props.img ?
                    <img src={props.img} alt=""/>
                    : <img src={loader} alt="loader"/>
                }
            </div>
           <div className='titles_book'>
               <span>{props.name}</span>
               <span className='author'>Год: {props.year}</span>
               <span className='author'>Автор: {props.author}</span>
               <span className='price'>Цена: {props.price} $</span>
               <button onClick={addToBasket}>Купить</button>

           </div>

        </div>
    );
}
export default BookItem;
