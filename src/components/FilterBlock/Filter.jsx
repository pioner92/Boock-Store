import React, {useState} from 'react';
import './Filter.css'
import FilterItem from "./FilterItem/FilterItem";
import {defaultCategory} from "../../util/BooksLoad/BooksLoad";


const Filter = (props) => {
    const [isFilter, setIsFilter] = useState(false)
    const [filterTitle, setFilterTitle] = useState(defaultCategory())

    const setStateIsFilter = () => {
        setIsFilter(!isFilter)
    }
    const Filter = (filter) => {
        props.Filter(filter)
        setFilterTitle(filter)
    }
    const priceFrom = (e) => {
        props.onChangePriceFrom(e.target.value)
    }
    const priceBefore = (e) => {
        props.onChangePriceBefore(e.target.value)
    }
    const search = () => {
        props.search()
        props.resetPageNumber()

    }


    return (
        <div className='filter'>
            <div onClick={setStateIsFilter} className='filter_langue'>
                <span>{filterTitle}</span>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10H18V8H0V10ZM0 14H18V12H0V14ZM0 6H18V4H0V6ZM0 0V2H18V0H0Z" fill="#A4A2A2"/>
                </svg>
            </div>
            {isFilter &&
            <div className='list_filter_items'>
                <ul>
                    {props.category.map((el) => {
                        return (
                            <FilterItem resetPageNumber={props.resetPageNumber}
                                        setIsFilter={setIsFilter}
                                        Filter={Filter} key={el.id}
                                        filterName={el.name}
                            />
                        )
                    })}
                </ul>
            </div>
            }
            <div className='filter_price'>
                <div>
                    <span>Цена от:</span>
                    <input onChange={priceFrom} value={props.inputFrom} type="text"/>
                </div>
                <div>
                    <span>Цена до:</span>
                    <input onChange={priceBefore} value={props.inputBefore} type="text"/>
                </div>
                <div>
                    <button onClick={search}>Поиск</button>
                </div>
            </div>

        </div>
    );
};

export default Filter;
