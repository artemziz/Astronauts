import React from 'react';
import './normalize.css';
import './App.css';
import Header from './components/Header/Header';
import AstronautsTable from './components/AstronautsTable/AstronautsTable';
import AddButton from './components/AddButton/AddButton';

function App() {
  return (
    <div className="App">
      <Header/>
      <AstronautsTable/>
      <AddButton/>
    </div>
  );
}

export default App;
