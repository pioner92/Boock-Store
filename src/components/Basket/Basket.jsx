import React from 'react';
import BasketBookItem from "./BasketBookItem/BasketBookItem";
import './Basket.css'
import {removeBasketItemAction} from "../../redux/Actions/Actions";

const Basket = (props) => {
    return (
        <div className='basket'>
            <span className='basket_title'>Корзина</span>
            {props.basket_list.map((el,index)=>{
                return (
                    <BasketBookItem removeBasketItemAction={props.removeBasketItemAction} price={el.price} image={el.img} key={index} name={el.name} />
                )
            })}
            <div className='basket_total_title'>
                <span >В сумме: {props.basketTotal} $</span>
            </div>
        </div>
    );
};

export default Basket;
