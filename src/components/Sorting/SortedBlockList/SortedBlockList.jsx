import React from 'react';
import './SortedBlockList.css'
import SortedBlockItem from "../SortedBlockItems/SortedBlockItem";

const SortedBlockList = (props) => {

    const onSelect = (sortingValue)=>{
        props.sorting(sortingValue)
        props.setIsActive(false)

    }
    const sortingItem = [
        {value:'low',name:'Цена по убыванию'},
        {value:'high',name:'Цена по возрастанию'},
        {value:'popular',name:'Популярные'},
        {value:'new',name:'Новые'}
    ]

    return (
        <div className='sorted_block_list'>
            {sortingItem.map((el,index)=>{
                return(
                    <SortedBlockItem key={index} setSortingName={props.setSortingName} onSelect={onSelect} name={el.name} value={el.value}/>
                )
            })}
        </div>
    );
};

export default SortedBlockList;
