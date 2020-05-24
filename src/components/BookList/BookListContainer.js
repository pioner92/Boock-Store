import React from 'react';
import {connect} from 'react-redux'
import {addBasketAction, bookListLoadAction} from "../../redux/Actions/Actions";
import BookList from "./BookList";


const mapStateToProps = (state) => {
    return {
        basketTotal: state.basketTotal,
        boockList: state.boockListFiler
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToBasket: (price) => {
            dispatch(addBasketAction(price))
        },
    }
}

const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList)


export default BookListContainer;
