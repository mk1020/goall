import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import RightBar from './components/rightBar/rightBar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
     debugger;
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className='content-wrapper'>
            <Route path='/profile' render={()=>  <Profile data={props.state.profilePage} addPost={props.addPost} /> } />
            <Route path='/dialogs' render={()=> ( <Dialogs data={props.state.dialogsPage}/> )} />
            </div>
            <RightBar />
        </div>
        </BrowserRouter>
    );
}

export default App;
