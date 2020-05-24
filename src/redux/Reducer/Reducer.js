import {
    ADDBASKET,
    BOOKLISTLOAD,
    FILTERBOOCKS,
    ONCHANGEPRICEBEFORE,
    ONCHANGEPRICEFROM,
    SEARCH
} from "../Constant/Constant";


const initialState = {
    basketTotal: 0,
    boockList: [],
    boockListFiler: [],
    inputFrom: '',
    inputBefore: '',
    category: []

}


const reducer = (state = initialState, action) => {

    if (action.type === ADDBASKET) {
        return {...state, basketTotal: state.basketTotal + action.price}
    }
    if (action.type === BOOKLISTLOAD) {
        const minprice = action.boocklist.reduce((prev, el) => prev.price > el.price ? el : prev)
        const maxprice = action.boocklist.reduce((prev, el) => prev.price < el.price ? el : prev)
        return {
            ...state,
            boockList: [...action.boocklist],
            category: [...action.category],
            boockListFiler: [...action.boocklist],
            inputFrom: minprice.price,
            inputBefore: maxprice.price,
        }
    }

    if (action.type === FILTERBOOCKS && action.filter !== state.category[0].name) {
        return {
            ...state,
            boockListFiler: [...state.boockList.filter((el) => el.category.toString() === action.filter.toString())]
        }
    } else if (action.type === FILTERBOOCKS && action.filter === state.category[0].name) {
        return {...state, boockListFiler: [...state.boockList]}
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
            boockListFiler: [...state.boockList.filter((el) => el.price >= state.inputFrom && el.price <= state.inputBefore)]
        }
    }
    return state
}
export default reducer
