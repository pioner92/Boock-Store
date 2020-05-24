import {
    ADDBASKET,
    BOOKLISTLOAD,
    FILTERBOOCKS,
    ONCHANGEPRICEBEFORE,
    ONCHANGEPRICEFROM, PAGINATION, RESETPAGENUMBER,
    SEARCH
} from "../Constant/Constant";


const initialState = {
    basketTotal: 0,
    bookList: [],
    bookListFiler: [],
    inputFrom: '',
    inputBefore: '',
    category: [],
    startPage: 0,
    endPage: 9

}


const reducer = (state = initialState, action) => {

    if (action.type === ADDBASKET) {
        return {...state, basketTotal: state.basketTotal + action.price}
    }
    if (action.type === BOOKLISTLOAD) {
        const minPrice = action.booklist.reduce((prev, el) => prev.price > el.price ? el : prev)
        const maxPrice = action.booklist.reduce((prev, el) => prev.price < el.price ? el : prev)
        return {
            ...state,
            bookList: [...action.booklist],
            category: [...action.category],
            bookListFiler: [...action.booklist],
            inputFrom: minPrice.price,
            inputBefore: maxPrice.price,
        }
    }

    if (action.type === FILTERBOOCKS && action.filter !== state.category[0].name) {
        return {
            ...state,
            bookListFiler: [...state.bookList.filter((el) => el.category.toString() === action.filter.toString())]
        }
    } else if (action.type === FILTERBOOCKS && action.filter === state.category[0].name) {
        return {...state, bookListFiler: [...state.bookList]}
    }
    if (action.type === ONCHANGEPRICEFROM) {
        return {...state, inputFrom: action.price}
    }
    if (action.type === ONCHANGEPRICEBEFORE) {
        return {...state, inputBefore: action.price}
    }
    if (action.type === SEARCH) {
        return {
            ...state,
            bookListFiler: [...state.bookList.filter((el) => el.price >= state.inputFrom && el.price <= state.inputBefore)]
        }
    }
    if(action.type===PAGINATION){
        return {...state,startPage: action.start,endPage:action.end }
    }
    if(action.type === RESETPAGENUMBER){
        return {...state,startPage: 0,endPage: 9}
    }
    return state
}
export default reducer
