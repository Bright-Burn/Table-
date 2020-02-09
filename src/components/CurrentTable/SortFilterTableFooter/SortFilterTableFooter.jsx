import React, {useContext} from 'react';
import {ContextApp} from "../../../reducer/reducer";

const SortFilterTableFooter = () => {
    const {state, dispatch} = useContext(ContextApp);
    const {tableArray} = state

    return (
        <tfoot>
            <tr>
                {tableArray[0].map((item, indexOfSortedCol) =>
                    <td key={indexOfSortedCol}>
                        <button key={Math.random()}
                                className='sort__button'
                                onClick={() => dispatch({
                                    type: 'HANDLE__SORT',
                                    payload: indexOfSortedCol,
                                    sortUp: true
                                })
                                }>SORT up</button>
                    </td> )}
            </tr>

            <tr>

                {tableArray[0].map((item, indexOfSortedCol) =>
                    <td key={indexOfSortedCol}>
                        <button key={Math.random()}
                                className='sort__button'
                                onClick={() => dispatch({
                                    type: 'HANDLE__SORT',
                                    payload: indexOfSortedCol,
                                    sortUp: false
                                })
                                }>SORT Down</button>
                    </td> )}
            </tr>

            <tr>
                {tableArray[0].map((item, indexOfFiltredCol) =>
                    <td key={indexOfFiltredCol+1}>
                        <input key={indexOfFiltredCol}
                               className='filter__input'
                               placeholder='filter...'
                               onChange={(e) => dispatch({
                                   type: 'HANDLE__FILTER',
                                   payload: indexOfFiltredCol,
                                   value: e.target.value
                               })
                               }/>

                    </td> )}
            </tr>
        </tfoot>
    );
};

export default SortFilterTableFooter;