import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import RightBar from './components/rightBar/rightBar';
import { Route } from "react-router-dom";
import ProfileConteiner from './components/Profile/ProfileConteiner';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';



const App = (props) => {
    console.log('PROPS', props.store.getState());
    return (
        
                <div className="app-wrapper">
                    <Header />
                    <Navbar />
                    <div className='content-wrapper'>
                        <Route path='/profile' render={() => <ProfileConteiner store={props.store} />} />
                        <Route path='/dialogs' render={() => (<DialogsConteiner store={props.store} />)} />
                    </div>
                    <RightBar />
                </div>
            //data={props.state.dialogsPage} dispatch={props.dispatch} 
    );
}

export default App;
