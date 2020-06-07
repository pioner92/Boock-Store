import React from 'react';


const FilterItems = (props) => {

    const Filter = () => {
        props.Filter(props.filterName)
        props.setIsFilter()
        props.resetPageNumber()
        props.setFilterTitle(props.filterName)
    }
    return (
        <li onClick={Filter}>
            {props.filterName}
        </li>
    );
}

export default FilterItems;
