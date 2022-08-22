import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import LayoutContextProvider from './context/LayoutContext';
import LayoutContextNewProvider from './context/LayoutContextNew';
import mainContextProvider from './context/mainContext';

function App() {


  return (
    <div className="App">
      <LayoutContextNewProvider>
    <mainContextProvider>
      <Card/>
    </mainContextProvider>
    </LayoutContextNewProvider>
    </div>
  );
}

export default App;
