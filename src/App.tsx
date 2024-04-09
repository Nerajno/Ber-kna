import React from 'react';
import './App.css';
import Button  from './components/display/Button';

export function App() {



  return (
    <>
      <div className='container'>
        <h1>Calculator Application</h1>
        <div id='calculator'>
        <Button />
        </div>
      </div>
    </>
  );
  }
