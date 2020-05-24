import {connect} from 'react-redux'
import {addBasketAction, setPageNumberAction} from "../../redux/Actions/Actions";
import BookList from "./BookList";


const mapStateToProps = ({basketTotal,bookListFiler,startPage,endPage}) => {
    return {
        basketTotal:basketTotal,
        bookList: bookListFiler,
        startPage:startPage,
        endPage:endPage
    }
}

const BookListContainer = connect(mapStateToProps, {
    addToBasket:addBasketAction,
    setPageNumber:setPageNumberAction
})(BookList)


export default BookListContainer;
