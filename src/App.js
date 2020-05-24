import React from 'react';
import './App.css';
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="App">
        <HeaderContainer/>
        <Content/>
        {/*<Footer/>*/}
    </div>
  );
}

export default App;
