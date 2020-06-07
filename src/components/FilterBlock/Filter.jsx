import React, {useCallback, useState} from 'react';
import './Filter.css'
import FilterLanguagesBlock from "./FilterLangueBlock/FilterLanguageBlock";


const Filter = (props) => {
    const [isFilter, setIsFilter] = useState(false)


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
    }


    return (
        <div className='filter'>

            <FilterLanguagesBlock
                setStateIsFilter={setStateIsFilter}

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

