import React from 'react';
import './BasketBookItem.css'



const BasketBookItem = (props) => {
    const removeBookItem = ()=>{
        props.removeBasketItemAction(props.name)
    }
    return (
        <div className='basket__book_item'>
            <img src={props.image} alt=""/>
            <span>{props.name}</span>
            <span>{props.price} $</span>
            <svg onClick={removeBookItem} className='basket_delete' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
            </svg>

        </div>
    );
};

export default BasketBookItem;
