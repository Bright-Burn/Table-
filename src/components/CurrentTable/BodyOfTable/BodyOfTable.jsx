import React, {useContext} from 'react';
import {ContextApp} from "../../../reducer/reducer";

const BodyOfTable = () => {
    const {state, dispatch} = useContext(ContextApp);
    const {tableArray, filtred, filtredCol, filtredValue} = state;

    const isFiltredTableArray = filtred ?
        tableArray.filter(row => row[filtredCol].value.toLowerCase().indexOf(filtredValue[filtredCol].toLowerCase()) >= 0)
        :
        tableArray;

    return (
        <tbody>
            {isFiltredTableArray.map((item, indexRow) =>
                <tr key={indexRow}>
                    {isFiltredTableArray[0].map((item, indexCol) =>
                        <td key={indexCol}>
                            <input key={indexCol+indexRow}
                                   type="text"
                                   className={indexCol % 2 === 1? 'even__col' : ''}
                                   value={isFiltredTableArray[indexRow]? isFiltredTableArray[indexRow][indexCol].value  : ''}
                                   onChange={(e) => dispatch({
                                       type: 'VALUE__CHANGE',
                                       payload: e.target.value,
                                       indexCol,
                                       indexRow,
                                       id: isFiltredTableArray[indexRow][indexCol].id
                                   })
                                   }/>
                        </td> )}

                </tr>)}
        </tbody>
    );
};

export default BodyOfTable;