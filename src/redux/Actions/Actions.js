import {
    ADDBASKET,
    BOOKLISTLOAD,
    FILTERBOOCKS,
    ONCHANGEPRICEBEFORE,
    ONCHANGEPRICEFROM, PAGINATION, RESETPAGENUMBER,
    SEARCH
} from "../Constant/Constant";

export const addBasketAction = (price) => {
    return {
        type: ADDBASKET,
        price
    }
}
export const bookListLoadAction = (booklist) => {
    return {
        type: BOOKLISTLOAD,
        booklist: booklist.books,
        category: booklist.category

    }
}
export const filterBooksAction = (filter) => {
    return {
        type: FILTERBOOCKS,
        filter
    }
}
export const onChangePriceFromAction = (price) => {
    return {
        type: ONCHANGEPRICEFROM,
        price
    }
}

export const onChangePriceBeforeAction = (price) => {
    return {
        type: ONCHANGEPRICEBEFORE,
        price
    }
}
export const searchAction = () => {
    return {
        type: SEARCH,
    }
}

export const setPageNumberAction = (index) => {
    let end = 9 * (index + 1)
    let start = end - 9
    return {
        type: PAGINATION,
        start,
        end
    }
}
export const resetPageNumberAction = ()=>{
    return {
        type:RESETPAGENUMBER,
    }
}
