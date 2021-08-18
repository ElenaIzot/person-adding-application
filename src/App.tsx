import React from 'react';
import './App.css';
import { ModalCreatePerson } from './Components/ModalCreatePerson';
import { Table } from './Components/Table';
import { ModalEditPerson } from './Components/ModalEditPerson';

function App() {
  return (
    <div className="App">
      <Table />
      <ModalCreatePerson />
      <ModalEditPerson />
    </div>
  );
}

export default App;
