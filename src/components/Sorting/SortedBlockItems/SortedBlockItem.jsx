import React from 'react';

const SortedBlockItem = (props) => {
    const onSelect = (selectValue,name)=>{
        props.onSelect(selectValue)
        props.setSortingName(name)
    }

    return (
        <div>
            <span onClick={()=>onSelect(props.value,props.name)} >{props.name}</span>
        </div>
    );
};

export default SortedBlockItem;
