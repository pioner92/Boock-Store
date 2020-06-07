import {
    ADDBASKET, ADDTOBASKETLIST,
    BOOKLISTLOAD, CATEGORYLOAD,
    ONCHANGEPRICEBEFORE,
    ONCHANGEPRICEFROM,
    PAGINATION, REGISTRATION, REGISTRATION_RESPONSE, REMOVEBASKETITEM,
    RESETPAGENUMBER,
    RESETSORTED,
    SEARCH,
    SEARCHINPUT,
    SELECTCATEGORY,
    SERACHBUTTONCLICK,
    SORTEDNEWBOOK,
    SORTEDPOPULARBOOK,
    SORTEDPRICEHIGH,
    SORTEDPRICELOWER
} from "../Constant/Constant";

export const addBasketAction = (price) => {
    return {
        type: ADDBASKET,
        price
    }
}

export const addToBasketListAction = (bookName)=>{
    return {
        type:ADDTOBASKETLIST,
        bookName
    }
}
export const removeBasketItemAction = (bookName)=>{
    return {
        type: REMOVEBASKETITEM,
        bookName
    }
}

export const bookListLoadAction = ({books}) => {
    return {
        type: BOOKLISTLOAD,
        bookList: books

    }
}
export const categoryLoadAction = ({category})=>{
    return {
        type:CATEGORYLOAD,
        category
    }
}
export const filterBooksAction = (filter) => {
    return {
        type: SELECTCATEGORY,
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
export const filterPriceAction = () => {
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
export const resetPageNumberAction = () => {
    return {
        type: RESETPAGENUMBER,
    }
}
export const onChangeSearchAction = (text)=>{
    return {
        type:SEARCHINPUT,
        text
    }
}
export const onClickSearchAction = ()=>{
    return {
        type:SERACHBUTTONCLICK
    }
}
export const selectSortedAction = (sortingValue)=>{
    switch (sortingValue) {
        case 'low':return{type:SORTEDPRICELOWER}
        case 'high':return {type: SORTEDPRICEHIGH}
        case 'new':return {type: SORTEDNEWBOOK}
        case 'popular':return {type: SORTEDPOPULARBOOK}
        default :return
    }

}
export const registrationAction = (input_field)=>{
    switch (input_field.type) {
        case 'email':
            return {
            type:REGISTRATION,
            text:input_field.text,
            input_name :input_field.type
        }
        case 'login':
            return {
            type:REGISTRATION,
            text:input_field.text,
            input_name :input_field.type
        }
        case 'password':
            return {
            type:REGISTRATION,
            text:input_field.text,
            input_name :input_field.type
        }
    }
}

export const GetBookThunkCreator=() =>{
    return (dispatch)=>{
        fetch('http://localhost:4000/books')
            .then((res)=>res.json())
            .then((data)=>dispatch(bookListLoadAction(data)))
    }
}
export const GetCategoryThunkCreator = ()=>{
    return (dispatch)=>{
            fetch('http://localhost:4000/category')
                .then((res)=>res.json())
                .then((data)=>dispatch(categoryLoadAction(data)))
        }

}

export const registrationStatusAction =(status)=>{
    return{
        type:REGISTRATION_RESPONSE,
        status
    }
}

export const PostRegistrationFieldsThunkCreator =(reg_data)=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/registration', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(reg_data)
        }).then((res)=>res.json())
            .then((data)=>{
                dispatch(registrationStatusAction(data.status))})

    }
}
