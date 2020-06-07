import React from 'react';
import BookItem from "../../BookItem/BookItem";

const PopularBookList = (props) => {
    return (
        <>
            {props.bookList.map((el) => {
                if (el.popular) {
                    return (
                        <BookItem
                            author={el.author}
                            img={el.img} key={el.id}
                            addToBasket={props.addToBasket}
                            name={el.name}
                            price={el.price}
                        />
                    )
                }

            })}
        </>
    );
};

export default PopularBookList;
