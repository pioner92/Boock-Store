import React ,{useEffect} from 'react';
import './App.css';
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";
import Title from "./components/Title/Title";
import {BrowserRouter} from 'react-router-dom'
import Store from "./redux/Store/Store";
import {selectSortedAction} from "./redux/Actions/Actions";

function App(props) {
    useEffect(()=>{
        props.GetCategoryThunkCreator()
        props.GetBookThunkCreator()
            Store.dispatch(selectSortedAction('new'))
    },[])
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderContainer/>
                <Title/>
                <Content/>
            </BrowserRouter>
        </div>
    );
}

export default App;
