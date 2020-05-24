import {connect} from 'react-redux'
import Filter from "./Filter";
import {
    filterBooksAction,
    onChangePriceBeforeAction,
    onChangePriceFromAction, resetPageNumberAction,
    searchAction
} from "../../redux/Actions/Actions";



const mapStateToProps = ({inputFrom,inputBefore,category})=>{
    return{
        inputFrom,
        inputBefore,
        category
    }
}

const FilterConnect = connect(mapStateToProps,{
    Filter:filterBooksAction,
    onChangePriceFrom:onChangePriceFromAction,
    onChangePriceBefore:onChangePriceBeforeAction,
    search:searchAction,
    resetPageNumber:resetPageNumberAction

})(Filter)
export default FilterConnect
