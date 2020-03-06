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
    console.log(props.dialogs)
    console.log(props.messages)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/profile' render={() => <Profile data_posts={props.data_posts}/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/exit' component={Exit}/>
                </div>
            </div>
        </BrowserRouter>
);
}

export default App;
