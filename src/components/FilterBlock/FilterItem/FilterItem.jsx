import React from 'react';


const FilterItem = (props) => {

    const Filter = ()=>{
        props.Filter(props.filterName)
        props.setIsFilter()
        props.resetPageNumber()
    }
    return (
        <li onClick={Filter}>
            {props.filterName}
        </li>
    );
};

export default FilterItem;
