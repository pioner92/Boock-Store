import {connect} from 'react-redux'
import Basket from "./Basket";
import {removeBasketItemAction} from "../../redux/Actions/Actions";

const mapStateToProps = (state)=>{
    return {
        basket_list:state.basket_list,
        basketTotal:state.basketTotal
    }
}

export const BasketContainer = connect(mapStateToProps,{
    removeBasketItemAction
})(Basket)
