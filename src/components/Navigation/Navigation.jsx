import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <ul>
                    <li>Главная</li>
                    <li>Книги</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className='wrap'>
                <div className='rectangle'/>
                <div className='rectangle6'/>
            </div>
        </>
    );
};

export default Navigation;
