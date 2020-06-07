import {connect} from 'react-redux'
import Filter from "./Filter";
import {
    filterBooksAction,
    filterPriceAction,
    onChangePriceBeforeAction,
    onChangePriceFromAction,
    resetPageNumberAction
} from "../../redux/Actions/Actions";


const mapStateToProps = ({inputFrom, inputBefore, category}) => {
    return {
        inputFrom,
        inputBefore,
        category
    }
}

const FilterContainer = connect(mapStateToProps, {
    Filter: filterBooksAction,
    onChangePriceFrom: onChangePriceFromAction,
    onChangePriceBefore: onChangePriceBeforeAction,
    filterPrice: filterPriceAction,
    resetPageNumber: resetPageNumberAction

})(Filter)
export default FilterContainer
