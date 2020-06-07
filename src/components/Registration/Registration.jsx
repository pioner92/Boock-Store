import React from 'react';
import './Registration.css'


const Registration = (props) => {
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
    return (
        <div className='registration_bg'>
            <div className='registration'>
                <form className='registration_form' action="">
                    <span onClick={onClickCloseRegistration} className='registration_exit'>X</span>
                    <input value={email} onChange={(e) => onChangeInput({type: 'email', text: e.target.value})}
                           placeholder='email' type="text"/>
                    <input value={login} onChange={(e) => onChangeInput({type: 'login', text: e.target.value})}
                           placeholder='login' type="text"/>
                    <input value={password}
                           onChange={(e) => onChangeInput({type: 'password', text: e.target.value})}
                           placeholder='password' type="password"/>
                    <button onClick={onClickRegistration} type='submit'>Регистрация</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
