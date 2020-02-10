import React, {useContext, useEffect, useState} from 'react';
import {ContextApp} from "../../../reducer/reducer";

const HeaderOfTable = () => {

    const {state, dispatch} = useContext(ContextApp);
    const {tableArray} = state

    const [ scrolled, setScrolled ] = useState();

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('table__title')
            if (window.pageYOffset > header.offsetHeight ) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    });

    return (
        <thead >
            <tr id='table__title' className={scrolled? 'fixed' : ''}>
                {tableArray[0].map((item, indexOfHeader) =>
                    <th key={indexOfHeader}>
                        <input key={indexOfHeader+1}
                               className='table__title'
                               type="text"
                               onChange={(e) => dispatch({
                                   type: 'SET__HEADER',
                                   payload: e.target.value,
                                   indexOfHeader
                               })
                               }/>
                    </th> )}
            </tr>
        </thead>

    );
};

export default HeaderOfTable;