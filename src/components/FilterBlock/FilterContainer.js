import {connect} from 'react-redux'
import Filter from "./Filter";
import {
    filterBoocksAction,
    onChangePriceBeforeAction,
    onChangePriceFromAction,
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
    Filter:filterBoocksAction,
    onChangePriceFrom:onChangePriceFromAction,
    onChangePriceBefore:onChangePriceBeforeAction,
    search:searchAction

})(Filter)
export default FilterConnect
