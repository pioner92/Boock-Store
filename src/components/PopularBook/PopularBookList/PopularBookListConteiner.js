import {connect} from 'react-redux'
import PopularBookList from "./PopularBookList";
import {addBasketAction, setPageNumberAction} from "../../../redux/Actions/Actions";


const mapStateToProps = ({bookList})=>{
    return {
        bookList: bookList,
    }

}

export const PopularBookListContainer = connect(mapStateToProps,{
    addToBasket:addBasketAction,
    setPageNumber:setPageNumberAction
})(PopularBookList)
