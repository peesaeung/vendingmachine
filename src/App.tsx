import React from 'react';
import {store} from "./store";
import {Provider} from "react-redux";
import Money from "./money";
import Shelf from "./shelf";
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <p>Vending Machine</p>
                <Money/>
                <Shelf/>
            </div>
        </Provider>
    );
}

export default App;
