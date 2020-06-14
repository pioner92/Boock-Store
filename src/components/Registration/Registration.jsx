import React,{useState} from 'react';
import './Registration.css'
import {PostLoginFieldsThunkCreator} from "../../redux/Actions/Actions";



const Registration = (props) => {
    const [isLogin,setIsLogin] = useState(false)
    const {email,login,password} = props
    const onClickCloseRegistration = () => {
        props.onClickCloseRegistration()
    }

    const onChangeInput = (ob) => {
        props.registrationAction(ob)
    }

    const onClickRegistration = (e) => {
        e.preventDefault()
        props.PostRegistrationFieldsThunkCreator({email,login,password})
    }

    const SetIsLogin = ()=>{
        setIsLogin(true)
    }
    const SetRegisterState = ()=>{
        setIsLogin(false)
    }
    const onClickLogin = (e) =>{
        e.preventDefault()
        props.PostLoginFieldsThunkCreator({email,password})
    }
    return (
        <div className='registration_bg'>
            <div className='registration'>
                <div className= 'registration_or_login'>
                    <span onClick={SetRegisterState}>Регистрация </span> /
                    <span onClick={SetIsLogin}>Вход</span>
                </div>
                <div className='registration_status'>
                    {!props.isLogin?<span className='registration_bad_status'>{props.status.msg}</span>
                    :<span className='registration_good_status'>{props.status.msg}</span>
                    }
                </div>
                <form className='registration_form' action="">
                    <span onClick={onClickCloseRegistration} className='registration_exit'>X</span>
                    <input value={email} onChange={(e) => onChangeInput({type: 'email', text: e.target.value})}
                           placeholder='email' type="text"/>
                    {!isLogin&&<input value={login} onChange={(e) => onChangeInput({type: 'login', text: e.target.value})}
                                      placeholder='login' type="text"/>}

                    <input value={password}
                           onChange={(e) => onChangeInput({type: 'password', text: e.target.value})}
                           placeholder='password' type="password"/>
                    {isLogin?<button onClick={onClickLogin}  type='submit'>Вход</button>
                    :<button onClick={onClickRegistration} type='submit'>Регистрация</button>
                    }

                </form>
            </div>
        </div>
    );
};

export default Registration;
