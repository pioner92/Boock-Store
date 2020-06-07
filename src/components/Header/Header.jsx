import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'
import BookLogo from '../../static/img/bookLogo.png'
import {SearchContainer} from "../Search/SearchContainer";
import {RegistrationContainer} from "../Registration/RegistrationContainer";


const Header =(props) => {
   const [isActive,setIsActive]= useState(false)

    const setIsActiveRegistration = (e)=>{
       e.preventDefault()
        setIsActive(true)
    }
    const onClickCloseRegistration = ()=>{
       setIsActive(false)
    }
    return (
        <div className='header'>
            <div className='logo'>
                <div>
                    <img src={BookLogo} alt=""/>
                </div>
                <div>
                    <NavLink to='/' exact ><span>Book Store</span></NavLink>
                </div>
            </div>
            <SearchContainer/>

            <div className='profile_block'>
                {props.registration_response==='ok'?
                    <span>Log Out</span>
                    :
                    <div className='profile' onClick={setIsActiveRegistration}>
                        <svg    height="35" viewBox="0 0 16 16" fill="#404040" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" />
                        </svg>
                    </div>
                }



                <NavLink to='/basket'>
                <div className='basket'>
                    <svg height="35" viewBox="0 0 32 31" fill="#404040" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.7344 8.35938C31.5365 8.07812 31.2708 7.9375 30.9375 7.9375H9.71875L8.09375 2.40625C7.94792 1.90625 7.75 1.47917 7.5 1.125C7.25 0.770833 6.98438 0.520833 6.70312 0.375C6.42188 0.229167 6.17708 0.130208 5.96875 0.078125C5.76042 0.0260417 5.55208 0 5.34375 0H1.0625C0.791667 0 0.5625 0.09375 0.375 0.28125C0.1875 0.46875 0.09375 0.708333 0.09375 1C0.09375 1.16667 0.135417 1.32812 0.21875 1.48438C0.302083 1.64062 0.421875 1.76042 0.578125 1.84375C0.734375 1.92708 0.895833 1.96875 1.0625 1.96875H5.34375C5.42708 1.96875 5.50521 1.97917 5.57812 2C5.65104 2.02083 5.75 2.10938 5.875 2.26562C6 2.42188 6.10417 2.65625 6.1875 2.96875L11.7188 23.2812C11.7604 23.4062 11.8281 23.526 11.9219 23.6406C12.0156 23.7552 12.125 23.8438 12.25 23.9062C12.375 23.9688 12.5104 24 12.6562 24H26.1562C26.3646 24 26.5573 23.9375 26.7344 23.8125C26.9115 23.6875 27.0312 23.5312 27.0938 23.3438L31.875 9.28125C31.9792 8.94792 31.9323 8.64062 31.7344 8.35938ZM25.4688 22H13.4375L10.25 9.9375H29.5L25.4688 22ZM23.5 26C22.8125 26 22.224 26.2448 21.7344 26.7344C21.2448 27.224 21 27.8125 21 28.5C21 29.1875 21.2448 29.776 21.7344 30.2656C22.224 30.7552 22.8125 31 23.5 31C24.1875 31 24.776 30.7552 25.2656 30.2656C25.7552 29.776 26 29.1875 26 28.5C26 27.8125 25.7552 27.224 25.2656 26.7344C24.776 26.2448 24.1875 26 23.5 26ZM14.5 26C14.0417 26 13.6198 26.1146 13.2344 26.3438C12.849 26.5729 12.5469 26.875 12.3281 27.25C12.1094 27.625 12 28.0417 12 28.5C12 29.1875 12.2448 29.776 12.7344 30.2656C13.224 30.7552 13.8125 31 14.5 31C15.1875 31 15.776 30.7552 16.2656 30.2656C16.7552 29.776 17 29.1875 17 28.5C17 28.3333 16.9844 28.1667 16.9531 28C16.9219 27.8333 16.875 27.6771 16.8125 27.5312C16.75 27.3854 16.6719 27.2448 16.5781 27.1094C16.4844 26.974 16.3802 26.849 16.2656 26.7344C16.151 26.6198 16.026 26.5156 15.8906 26.4219C15.7552 26.3281 15.6146 26.25 15.4688 26.1875C15.3229 26.125 15.1667 26.0781 15 26.0469C14.8333 26.0156 14.6667 26 14.5 26Z" />
                    </svg>
                    <span>{props.basketTotal.toFixed(2)} $</span>
                </div>
                </NavLink>

            </div>
            {isActive&&<RegistrationContainer  onClickCloseRegistration={onClickCloseRegistration} />
            }
        </div>
    );
}

export default Header;
