import React, {useContext} from 'react';
import {ContextApp} from "../../reducer/reducer";

import './ToolBar.css'

const ToolBar = () => {

    const {state, dispatch} = useContext(ContextApp);
    const {row, col} = state;

    return (
        <div className='toolBar'>
            <input type="number"
                   value={col}
                   onChange={(e) => dispatch({
                        type: 'SET__COL',
                        payload: e.target.value
                    })}/>
            <input type="number"
                   value={row}
                   onChange={(e) => dispatch({
                        type: 'SET__ROW',
                        payload: e.target.value
                   })}/>
            <button onClick={() => dispatch({
                        type: 'TABLE__READY'
                        })}>
                Создать таблицу
            </button>
        </div>
    );
};

export default ToolBar;