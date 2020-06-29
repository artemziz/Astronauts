import React from 'react';
import './normalize.css';
import './App.css';
import Header from './components/Header/Header';
import AstronautsTable from './components/AstronautsTable/AstronautsTable';

function App() {
  return (
    <div className="App">
      <Header/>
      <AstronautsTable/>
    </div>
  );
}

export default App;
