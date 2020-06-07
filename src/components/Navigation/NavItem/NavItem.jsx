import React from 'react';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    const SelectCategory = ()=>{
        props.Filter(props.navName)
        props.resetPageNumber()
    }

    return (
        <>
            <NavLink to={`/book/${props.navName}`} > <li onClick={SelectCategory}>{props.navName}</li></NavLink>
        </>
    );
};

export default NavItem;
