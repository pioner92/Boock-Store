import React from 'react';
import './Navigation.css'
import NavItem from "./NavItem/NavItem";


const Navigation = (props) => {
    return (
        <>
            <div className='navigation'>
                <span className="categories">Категории</span>
                <ul>
                    {props.category.map((el, index) => {
                        return (
                            <NavItem key={index} resetPageNumber={props.resetPageNumber} Filter={props.Filter}
                                     navName={el.name}/>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}
export default Navigation
