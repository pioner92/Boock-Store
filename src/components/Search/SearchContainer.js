import {connect} from 'react-redux'
import Search from "./Search";
import {onChangeSearchAction, onClickSearchAction} from "../../redux/Actions/Actions";

const mapStateToProps = (state) =>{
    return {
        searchText :state.inputSearchText
    }
}

export const SearchContainer = connect(mapStateToProps,{
    onClickSearch:onClickSearchAction,
    onChangeSearch:onChangeSearchAction
})(Search)

