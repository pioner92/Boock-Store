import React, {useCallback, useState} from 'react';
import './Filter.css'
import {defaultCategory} from "../../util/BooksLoad/BooksLoad";
import FilterPriceBlock from "./FilterPriceBLock/FilterPriceBlock";
import FilterLanguagesBlock from "./FilterLangueBlock/FilterLanguageBlock";
import FilterLanguagesListBLock from "./FilterLangueListBLock/FilterLangueListBLock";


const Filter = (props) => {
    const [isFilter, setIsFilter] = useState(false)
    const [filterTitle, setFilterTitle] = useState(defaultCategory())

    const setStateIsFilter = useCallback(() => {
        setIsFilter(!isFilter)
    }, [isFilter])

    const priceFrom = (e) => {
        props.onChangePriceFrom(e.target.value)
    }

    const priceBefore = (e) => {
        props.onChangePriceBefore(e.target.value)
    }

    const onFilterPrice = () => {
        props.filterPrice()
        props.resetPageNumber()
        setFilterTitle(defaultCategory())
    }


    return (
        <div className='filter'>

            <FilterLanguagesBlock
                setStateIsFilter={setStateIsFilter}
                filterTitle={filterTitle}
            />

            {/*{isFilter &&*/}
            {/*<FilterLanguagesListBLock*/}
            {/*    setFilterTitle={setFilterTitle}*/}
            {/*    setIsFilter={setIsFilter}*/}
            {/*    {...props}/>*/}
            {/*}*/}
            {/*<FilterPriceBlock*/}
            {/*    priceFrom={priceFrom}*/}
            {/*    priceBefore={priceBefore}*/}
            {/*    onFilterPrice={onFilterPrice}*/}
            {/*    {...props}*/}
            {/*/>*/}

        </div>
    );
}


export default Filter

