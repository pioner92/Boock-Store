import {connect} from 'react-redux'
import Header from "./Header";
import {registrationAction} from "../../redux/Actions/Actions";


const mapStateToProps = ({basketTotal,registration_response})=>{

    return{
        basketTotal,
        registration_response

    }
}

const HeaderContainer = connect(mapStateToProps,{
    registrationAction,
})(Header)
export default HeaderContainer
