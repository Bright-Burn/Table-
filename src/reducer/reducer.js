import React from 'react';
import produce from "immer";

export const ContextApp = React.createContext();
export const InitialState = {
    row: 5,
    col: 3,
    areFieldsReady: false,
    tableArray: [],
    filtred: false,
    filtredCol: null,
    filtredValue: []
};

export const Reducer = (state, action) =>
    produce(state, draft => {
        switch (action.type) {
            case 'SET__ROW':
                draft.row = action.payload;
                draft.areFieldsReady = false;
            break;

            case 'SET__COL':
                draft.col = action.payload;
                draft.areFieldsReady = false;
             break;

            case 'TABLE__READY':
                const array = [];
                for (let i = 0; i < state.row; i++) {
                    let colArray = [];
                    for (let j = 0; j < state.col; j++) {
                        colArray.push({id: ''+i+j, value: ''})
                    }
                    array.push(colArray)
                }
                draft.areFieldsReady = true;
                draft.tableArray = array;
                break;

            case 'VALUE__CHANGE':
                    const updatedTaleArray = draft.tableArray.map(row => {
                    if(row[action.indexCol].id === action.id) {
                        row[action.indexCol].value = action.payload;
                        return row;
                    }
                        return row });
                draft.tableArray = updatedTaleArray;
                break;

            case 'HANDLE__SORT':

                draft.tableArray.sort((a,b) => {
                    if (isNaN(+a[action.payload].value)?
                        a[action.payload].value > b[action.payload].value
                        :
                        +a[action.payload].value > +b[action.payload].value) {
                        if(action.sortUp) {
                            return 1
                        }
                        return -1
                    } else if (isNaN(+a[action.payload].value)?
                        a[action.payload].value < b[action.payload].value
                        :
                        +a[action.payload].value < +b[action.payload].value) {
                        if(action.sortUp) {
                            return -1
                        }
                        return 1
                    } else {
                        return 0
                    }
                });

               break;

            case 'HANDLE__FILTER':
                draft.filtredValue[action.payload] = action.value;
                draft.filtredCol = action.payload;
                draft.filtred = action.value === ''? false : true;
                break;

         }
    })
