import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import LayoutContextProvider from './context/LayoutContext';
import LayoutContextNewProvider from './context/LayoutContextNew';
import MainContextNewProvider from './context/mainContextNew';

function App() {


  return (
    <div className="App">
      <LayoutContextNewProvider>
    <MainContextNewProvider>
      <Card/>
    </MainContextNewProvider>
    </LayoutContextNewProvider>
    </div>
  );
}

export default App;
