import {connect} from 'react-redux'
import SortedBlockList from "./SortedBlockList";
import {selectSortedAction} from "../../../redux/Actions/Actions";

const mapStateToProps = (state)=>{
    return {

    }
}



export const SortedBlockListContainer = connect(mapStateToProps,{
    sorting:selectSortedAction
})(SortedBlockList)
