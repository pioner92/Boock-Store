import React from 'react';
import {SvgFilterList} from "../../SvgComponents/SvgComponents";
import './FilterLanguageBlock.css'

const FilterLanguagesBlock = ({setStateIsFilter, filterTitle}) => {
    return (
        <div onClick={setStateIsFilter} className='filter_language'>
            <span>{filterTitle}</span>
            <SvgFilterList/>
        </div>
    );
}

export default FilterLanguagesBlock;
