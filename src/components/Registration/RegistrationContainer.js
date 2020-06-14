import {connect} from 'react-redux'
import Registration from "./Registration";
import {
    PostLoginFieldsThunkCreator,
    PostRegistrationFieldsThunkCreator,
    registrationAction
} from "../../redux/Actions/Actions";


const mapStateToProps = (state)=>{
    return {
        status:state.registration_response,
        email:state.registration_inputs.email,
        login:state.registration_inputs.login,
        password:state.registration_inputs.password,
        isLogin:state.isLogin
    }
}

export const RegistrationContainer = connect(mapStateToProps,{
    registrationAction,
    PostRegistrationFieldsThunkCreator,
    PostLoginFieldsThunkCreator

})(Registration)
