import React from 'react';
import BasketBookItem from "./BasketBookItem/BasketBookItem";
import './Basket.css'


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
                {props.basketTotal>0?
                    <span >В сумме: {props.basketTotal} $</span>
               :
                <span> Корзина пуста</span>
                }
                {props.basketTotal>0&&
                    <span className='basket_pay'>Оплатить</span>
                }

            </div>

        </div>
    );
};

export default Basket;
