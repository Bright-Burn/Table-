import React, {useContext} from 'react';
import {ContextApp} from "../../reducer/reducer";
import BodyOfTable from "./BodyOfTable/BodyOfTable";

import './CurrentTable.css'
import HeaderOfTable from "./HeaderOfTable/HeaderOfTable";
import SortFilterTableFooter from "./SortFilterTableFooter/SortFilterTableFooter";

const CurrentTable = () => {
    
    const {state, dispatch} = useContext(ContextApp);
    const { areFieldsReady} = state;


   if(areFieldsReady) {

       return (
            <table >

                <HeaderOfTable />
                <BodyOfTable />
                <SortFilterTableFooter />

            </table>
       )
   };
   return false

};

export default CurrentTable;
