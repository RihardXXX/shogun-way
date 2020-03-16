import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Exit from "./components/Exit/Exit";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.store.getState()}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store} dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile store={props.store} dispatch={props.dispatch}/>}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/exit' render={Exit}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
