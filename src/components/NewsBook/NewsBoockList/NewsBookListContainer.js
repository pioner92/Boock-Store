import {connect} from 'react-redux'
import {addBasketAction, setPageNumberAction} from "../../../redux/Actions/Actions";
import NewsBookList from "./NewsBookList";


const mapStateToProps = ({bookList})=>{
    return {
        bookList: bookList,
    }

}

export const NewsBookListContainer = connect(mapStateToProps,{
    addToBasket:addBasketAction,
    setPageNumber:setPageNumberAction
})(NewsBookList)
