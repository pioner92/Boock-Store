import React from 'react';
import './Serach.css'
import {NavLink} from "react-router-dom";

const Search = (props) => {

    const onChange = (e)=>{
        props.onChangeSearch(e.target.value)
    }

    const onClick = ()=>{
        props.onClickSearch()
    }
    return (
        <div className='search'>
            <input placeholder='Поиск' onChange={onChange} value={props.searchText} type="text"/>
           <button onClick={onClick}><NavLink to={`/book`}> Поиск</NavLink></button>
        </div>
    );
};

export default Search;
