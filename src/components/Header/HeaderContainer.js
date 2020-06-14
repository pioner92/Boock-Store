import {connect} from 'react-redux'
import Header from "./Header";
import {logOutAction, registrationAction} from "../../redux/Actions/Actions";


const mapStateToProps = ({basketTotal,registration_response,isLogin,login})=>{

    return{
        basketTotal,
        registration_response,
        login,
        isLogin

    }
}

const HeaderContainer = connect(mapStateToProps,{
    registrationAction,
    logOutAction
})(Header)
export default HeaderContainer
