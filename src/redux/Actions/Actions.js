import {
    ADDBASKET,
    BOOKLISTLOAD,
    FILTERBOOCKS,
    ONCHANGEPRICEBEFORE,
    ONCHANGEPRICEFROM,
    SEARCH
} from "../Constant/Constant";

export const addBasketAction = (price) => {
    return {
        type: ADDBASKET,
        price
    }
}
export const bookListLoadAction = (boocklist) => {
    return {
        type: BOOKLISTLOAD,
        boocklist: boocklist.boocks,
        category: boocklist.category

    }
}
export const filterBoocksAction = (filter) => {
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
