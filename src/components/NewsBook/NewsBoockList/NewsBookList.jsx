import React from 'react';
import BookItem from "../../BookItem/BookItem";

const NewsBookList = (props) => {
    return (
        <>
            {props.bookList.map((el) => {
                if (el.news) {
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

export default NewsBookList;
