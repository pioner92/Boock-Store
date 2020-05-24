import books from './Books.json'
import Store from "../../redux/Store/Store";
import {bookListLoadAction} from "../../redux/Actions/Actions";


export const BooksLoad = ()=>{
    Store.dispatch(bookListLoadAction(books))
}

export const defaultCategory = ()=>{
    return books.category[0].name
}
