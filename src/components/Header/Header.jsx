import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <div className='logo'>
                <h1>Boock Store</h1>
            </div>
            <div className='basket'>
                <div>
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path
                                d="M21.5416 16.625H25.4583V10.75H31.3333V6.83334H25.4583V0.958344H21.5416V6.83334H15.6666V10.75H21.5416V16.625ZM13.7083 34.25C11.5541 34.25 9.81123 36.0125 9.81123 38.1667C9.81123 40.3208 11.5541 42.0833 13.7083 42.0833C15.8625 42.0833 17.625 40.3208 17.625 38.1667C17.625 36.0125 15.8625 34.25 13.7083 34.25ZM33.2916 34.25C31.1375 34.25 29.3946 36.0125 29.3946 38.1667C29.3946 40.3208 31.1375 42.0833 33.2916 42.0833C35.4458 42.0833 37.2083 40.3208 37.2083 38.1667C37.2083 36.0125 35.4458 34.25 33.2916 34.25ZM14.0412 27.8854L14.1 27.6504L15.8625 24.4583H30.4521C31.9208 24.4583 33.2133 23.6554 33.8791 22.4413L41.4383 8.71334L38.0308 6.83334H38.0112L35.8571 10.75L30.4521 20.5417H16.7046L16.45 20.0129L12.0633 10.75L10.2029 6.83334L8.36206 2.91668H1.95831V6.83334H5.87498L12.925 21.6971L10.2812 26.495C9.9679 27.0433 9.79165 27.6896 9.79165 28.375C9.79165 30.5292 11.5541 32.2917 13.7083 32.2917H37.2083V28.375H14.5308C14.2762 28.375 14.0412 28.1596 14.0412 27.8854Z"
                                fill="#86FFB6"/>
                        </g>
                        <defs>
                            <filter id="filter0_d" x="-2.04169" y="0.958344" width="47.48" height="49.125"
                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>


                </div>
                <span>{props.basketTotal.toFixed(2)} $</span>
            </div>
        </div>
    );
};

export default Header;
