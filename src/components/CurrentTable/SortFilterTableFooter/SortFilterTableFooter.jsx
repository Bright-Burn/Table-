import React, {useContext} from 'react';
import {ContextApp} from "../../../reducer/reducer";

const SortFilterTableFooter = ({colArray}) => {
    const {state, dispatch} = useContext(ContextApp);

    return (
        <tfoot>
            <tr>
                {colArray.map((item, indexOfSortedCol) =>
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

                {colArray.map((item, indexOfSortedCol) =>
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
                {colArray.map((item, indexOfFiltredCol) =>
                    <td key={indexOfFiltredCol+1}>
                        <input key={indexOfFiltredCol}
                               className='filter__input'
                               onChange={(e) => dispatch({
                                   type: 'HANDLE__FILTER',
                                   payload: indexOfFiltredCol,
                                   value: e.target.value
                               })
                               }/>

                        <div className='filter__button'>
                            <button onClick={() => dispatch({
                                type: 'FILTER__TOGGLE',
                                payload: indexOfFiltredCol,
                                isFultred: true
                            })}>Filter</button>
                        </div>

                        <div className='filter__button'>
                            <button onClick={() => dispatch({
                                type: 'FILTER__TOGGLE',
                                payload: indexOfFiltredCol,
                                isFultred: false
                            })}>Cancel</button>
                        </div>

                    </td> )}
            </tr>
        </tfoot>
    );
};

export default SortFilterTableFooter;