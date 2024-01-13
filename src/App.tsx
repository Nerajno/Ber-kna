import { useState } from 'react';
import './App.css';

function App() {

  const buttonPress = ( symbol: string ) => {
    console.log( symbol);
  }
  return (
    <>
      <div className='container'>
        <h1>Calculator @ FCC</h1>
        <div id='calculator'>
          <div id='display' style={{ textAlign: 'right' }}>
            <div id='answer'></div>
            <div id='expression'></div>
            <button id="clear" onClick={() => buttonPress('clear')} className='light-gray'></button>
            <button id="negative" onClick={() => buttonPress('negative')} className='light-gray'></button>
            <button id="percentage" onClick={() => buttonPress('percentage')} className='light-gray'></button>
            <button id="divide" onClick={() => buttonPress("/")} className='light-gray'></button>
            <button id="seven" onClick={() => buttonPress('7')} className='light-gray'></button>
            <button id="eight" onClick={() => buttonPress('8')} className='light-gray'></button>
            <button id="nine" onClick={() => buttonPress('9')} className='light-gray'></button>
            <button id="multiply" onClick={() => buttonPress('*')} className='light-gray'></button>
            <button id="four" onClick={() => buttonPress('4')} className='light-gray'></button>
            <button id="five" onClick={() => buttonPress('5')} className='light-gray'></button>
            <button id="six" onClick={() => buttonPress('6')} className='light-gray'></button>
            <button id="subtract" onClick={() => buttonPress('subtract')} className='light-gray'></button>
            <button id="one" onClick={() => buttonPress('1')} className='light-gray'></button>
            <button id="two" onClick={() => buttonPress('2')} className='light-gray'></button>
            <button id="three" onClick={() => buttonPress('3')} className='light-gray'></button>
            <button id="add" onClick={() => buttonPress('+')} className='light-gray'></button>
            <button id="zero" onClick={() => buttonPress('0')} className='light-gray'></button>
            <button id="decimal" onClick={() => buttonPress('.')} className='light-gray'></button>
            <button id="equals" onClick={() => buttonPress('=')} className='light-gray'></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
