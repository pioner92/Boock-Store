import {connect} from 'react-redux'
import Header from "./Header";
import {addBasketAction} from "../../redux/Actions/Actions";


const mapStateToProps = (state)=>{
    return{
        basketTotal: state.basketTotal
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        add:(text)=>{
            dispatch(addBasketAction(text))
        }
    }
}

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header)
export default HeaderContainer
