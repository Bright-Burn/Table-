import React, {useContext, useEffect, useState} from 'react';
import {ContextApp} from "../../../reducer/reducer";

const HeaderOfTable = ({colArray}) => {

    const {state, dispatch} = useContext(ContextApp);

    const [ scrolled, setScrolled ] = useState();

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header')
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
            <tr id='header' className={scrolled? 'fixed' : ''}>
                {colArray.map((item, indexOfHeader) =>
                    <th key={indexOfHeader}>
                        <input key={indexOfHeader+1}
                               className='header'
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