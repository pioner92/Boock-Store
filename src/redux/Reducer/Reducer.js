import {
    ADDBASKET,
    ADDTOBASKETLIST,
    BOOKLISTLOAD,
    CATEGORYLOAD, ISLOGIN, LOGOUT,
    ONCHANGEPRICEBEFORE,
    ONCHANGEPRICEFROM,
    PAGINATION,
    REGISTRATION,
    REGISTRATION_RESPONSE,
    REMOVEBASKETITEM,
    RESETPAGENUMBER,
    SEARCH,
    SEARCHINPUT,
    SELECTCATEGORY,
    SERACHBUTTONCLICK,
    SORTEDNEWBOOK,
    SORTEDPOPULARBOOK,
    SORTEDPRICEHIGH,
    SORTEDPRICELOWER
} from "../Constant/Constant";


const initialState = {
    basketTotal: 0,
    basket_list: [],
    bookList: [],
    bookListFiler: [],
    inputFrom: '',
    inputBefore: '',
    category: [],
    startPage: 0,
    endPage: 9,
    inputSearchText: '',
    registration_inputs: {
        email: '',
        login: '',
        password: ''
    },
    registration_response: '',
    login:'',
    isLogin:false
}


const reducer = (state = initialState, action) => {

    if (action.type === SELECTCATEGORY && action.filter !== state.category[0].name) {
        return {
            ...state,
            bookListFiler: [...state.bookList.filter((el) => el.category.toString() === action.filter.toString())]
        }
    } else if (action.type === SELECTCATEGORY && action.filter === state.category[0].name) {
        return {...state, bookListFiler: [...state.bookList]}
    }
    switch (action.type) {
        case ADDBASKET:
            return {...state, basketTotal: state.basketTotal + action.price};
        case ADDTOBASKETLIST:
            const book = state.bookList.find((el) => el.name === action.bookName)
            return {...state, basket_list: [...state.basket_list, book]}
        case CATEGORYLOAD:
            return {...state, category: [...action.category]}
        case BOOKLISTLOAD:
            const minPrice = action.bookList.reduce((prev, el) => prev.price > el.price ? el : prev)
            const maxPrice = action.bookList.reduce((prev, el) => prev.price < el.price ? el : prev)
            return {
                ...state,
                bookList: [...action.bookList],
                bookListFiler: [...action.bookList],
                inputFrom: minPrice.price,
                inputBefore: maxPrice.price,
            };
        case ONCHANGEPRICEFROM:
            return {...state, inputFrom: action.price};
        case ONCHANGEPRICEBEFORE:
            return {...state, inputBefore: action.price};
        case SEARCH:
            return {
                ...state,
                bookListFiler: [...state.bookList.filter((el) => el.price >= state.inputFrom && el.price <= state.inputBefore)]
            };
        case PAGINATION:
            return {...state, startPage: action.start, endPage: action.end};
        case RESETPAGENUMBER:
            return {...state, startPage: 0, endPage: 9};
        case SEARCHINPUT:
            return {...state, inputSearchText: action.text};
        case SERACHBUTTONCLICK:
            const newBookList = state.bookList.filter((el) => el.name.toLowerCase().indexOf(state.inputSearchText.toLowerCase()) !== -1)
            return {...state, bookListFiler: newBookList, inputSearchText: ''};
        case SORTEDPRICELOWER:
            const sortedlowprice = [...state.bookListFiler]
            sortedlowprice.sort((a, b) => a.price - b.price)
            return {...state, bookListFiler: sortedlowprice};
        case SORTEDPRICEHIGH :
            const sortedhighprice = [...state.bookListFiler]
            sortedhighprice.sort((a, b) => b.price - a.price)
            return {...state, bookListFiler: sortedhighprice}
        case SORTEDPOPULARBOOK:
            const sortedPopular = [...state.bookListFiler]
            sortedPopular.sort((a, b) => a.stars - b.stars)
            return {...state, bookListFiler: sortedPopular}
        case SORTEDNEWBOOK:
            const sortedNew = [...state.bookListFiler]
            sortedNew.sort((a, b) => b.year - a.year)
            return {...state, bookListFiler: sortedNew}
        case REGISTRATION_RESPONSE:
            return {...state, registration_response: {...action.status}}
        case ISLOGIN : return {...state,isLogin: true,registration_inputs: {email: '',login: '',password: ''},login: action.login}
        case LOGOUT : return {...state,isLogin: false}
        case REMOVEBASKETITEM:
            const book_item = state.bookList.find((el)=>el.name ===action.bookName)
            const new_basket_list = [...state.basket_list]
            new_basket_list.splice(state.basket_list.indexOf(book_item),1)
            return {...state,basketTotal: state.basketTotal-book_item.price,basket_list: [...new_basket_list]}
        case REGISTRATION:
            switch (action.input_name) {
                case 'email':
                    return {...state, registration_inputs: {...state.registration_inputs, email: action.text}}
                case 'login':
                    return {...state, registration_inputs: {...state.registration_inputs, login: action.text}}
                case 'password':
                    return {...state, registration_inputs: {...state.registration_inputs, password: action.text}}
            }
        default :
            return state;


    }
}
export default reducer
