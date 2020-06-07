import React from 'react';
import './FilterPriceBlock.css'

const FilterPriceBlock = (props) => {
    return (
        <div className='filter_price'>
            <div className='price_from'>
                <span>Цена от:</span>
                <input onChange={props.priceFrom} value={props.inputFrom} type="text"/>
            </div>
            <div className='price_before'>
                <span>до:</span>
                <input onChange={props.priceBefore} value={props.inputBefore} type="text"/>
            </div>
            <div>
                <button onClick={props.onFilterPrice}>Применить</button>
            </div>
        </div>
    );
}

export default FilterPriceBlock;
