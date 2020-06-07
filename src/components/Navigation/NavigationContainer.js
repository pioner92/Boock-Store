import {connect} from 'react-redux'
import Navigation from "./Navigation";
import {filterBooksAction, resetPageNumberAction} from "../../redux/Actions/Actions";

const mapStateToProps = (state)=>{
    return{
        category:state.category
    }
}


export const NavigationContainer = connect(mapStateToProps,{
    Filter: filterBooksAction,
    resetPageNumber: resetPageNumberAction
})(Navigation)
