import {connect} from 'react-redux'
import App from "./App";
import {GetBookThunkCreator, GetCategoryThunkCreator} from "./redux/Actions/Actions";

const mapStateToProps = (state)=>{
    return {

    }
}


export const AppContainer = connect(mapStateToProps,{
    GetBookThunkCreator,
    GetCategoryThunkCreator
})(App)
