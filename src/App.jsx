import React, {useReducer} from 'react';

import {ContextApp, InitialState, Reducer} from "./reducer/reducer";
import ToolBar from "./components/ToolBar/ToolBar";
import CurrentTable from "./components/CurrentTable/CurrentTable";


import './App.css';

function App() {

    const [state, dispatch] = useReducer(Reducer, InitialState);

  return (
        <ContextApp.Provider value={{dispatch, state}}>
        <div className='container'>
          <ToolBar/>
          <CurrentTable/>
        </div>
        </ContextApp.Provider>
  );
}

export default App;
