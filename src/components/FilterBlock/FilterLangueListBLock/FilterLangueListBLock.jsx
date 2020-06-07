import React from 'react';
import FilterItems from "../FilterItem/FilterItems";

const FilterLanguagesListBLock =(props) => {

    return (
        <div className='list_filter_items'>
            <ul>
                {props.category.map((el) => {
                    return (
                        <FilterItems
                            setFilterTitle={props.setFilterTitle}
                            resetPageNumber={props.resetPageNumber}
                            setIsFilter={props.setIsFilter}
                            Filter={props.Filter}
                            key={el.id}
                            filterName={el.name}
                        />
                    )
                })}
            </ul>
        </div>
    );
}


export default FilterLanguagesListBLock;
