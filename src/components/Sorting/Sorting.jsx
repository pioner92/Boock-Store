import React, { useState} from 'react';
import './Sorting.css'
import {SortedBlockListContainer} from "./SortedBlockList/SortedBlockListContainer";



const Sorting = () => {
    const [isActive, setIsActive] = useState(false)
    const [sortingName,setSortedName] =useState('Новые')



    const onClick = (e) => {
        setIsActive(!isActive)
    }
    Sorting.handleClickOutside = () => setIsActive(false);

    return (
        <div >
            <div onClick={onClick}  className='sorting'>
                {sortingName}
            </div>
            {isActive ?
                    <SortedBlockListContainer  setSortingName={setSortedName} setIsActive={setIsActive}/>
                 :
                null}

        </div>
    );
};


export default Sorting;
