import React, {useContext} from 'react';
import {ContextApp} from "../../reducer/reducer";
import BodyOfTable from "./BodyOfTable/BodyOfTable";

import './CurrentTable.css'
import HeaderOfTable from "./HeaderOfTable/HeaderOfTable";
import SortFilterTableFooter from "./SortFilterTableFooter/SortFilterTableFooter";

const CurrentTable = () => {
    
    const {state, dispatch} = useContext(ContextApp);
    const {row, col, areFieldsReady} = state;



   if(areFieldsReady) {
        const rowArray = [];
        const colArray = [];
        for (let i = 0; i < row; i++){
           rowArray.push(i)
        }
        for (let i = 0; i < col; i++){
           colArray.push(i)
        }
       return (
            <table >

                <HeaderOfTable colArray={colArray}/>
                <BodyOfTable colArray={colArray} rowArray={rowArray}/>
                <SortFilterTableFooter colArray={colArray}/>

            </table>
       )
   };
   return false

};

export default CurrentTable;
