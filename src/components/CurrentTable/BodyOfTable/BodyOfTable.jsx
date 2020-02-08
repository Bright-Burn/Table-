import React, {useContext} from 'react';
import {ContextApp} from "../../../reducer/reducer";

const BodyOfTable = () => {
    const {state, dispatch} = useContext(ContextApp);
    const {tableArray, filtred, filtredCol, filtredValue} = state;

    const isFiltredTableArray = filtred ? tableArray.filter(row => row[filtredCol] === filtredValue[filtredCol]) : tableArray;

    return (
        <tbody>
            {isFiltredTableArray.map((item, indexRow) =>
                <tr key={indexRow}>
                    {isFiltredTableArray[0].map((item, indexCol) =>
                        <td key={indexCol}>
                            <input key={indexCol+indexRow}
                                   type="text"
                                   value={isFiltredTableArray[indexRow]? isFiltredTableArray[indexRow][indexCol] : ''}
                                   onChange={(e) => dispatch({
                                       type: 'VALUE__CHANGE',
                                       payload: e.target.value,
                                       indexCol,
                                       indexRow
                                   })
                                   }/>
                        </td> )}

                </tr>)}
        </tbody>
    );
};

export default BodyOfTable;