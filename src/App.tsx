import { useState } from 'react';
import './App.css';

function App() {

  const buttonPress = ( symbol: string ) => {
    console.log( symbol);
  }
  return (
    <>
      <div className='container'>
        <h1>Calculator Application</h1>
        <div id='calculator'>
          <div id='display' style={{ textAlign: 'right' }}>
            <div id='answer'>{}</div>
            <div id='expression'>{}</div>
          </div>
          <button
            id='clear'
            onClick={() => buttonPress('clear')}
            className='light-gray'
          >
            C
          </button>
          <button
            id='negative'
            onClick={() => buttonPress('negative')}
            className='light-gray'
          >
            +/-
          </button>
          <button
            id='percentage'
            onClick={() => buttonPress('percentage')}
            className='light-gray'
          >
            %
          </button>
          <button
            id='divide'
            onClick={() => buttonPress('/')}
            className='yellow'
          >
            /
          </button>
          <button
            id='seven'
            onClick={() => buttonPress('7')}
            className='dark-gray'
          >
            7
          </button>
          <button
            id='eight'
            onClick={() => buttonPress('8')}
            className='dark-gray'
          >
            8
          </button>
          <button
            id='nine'
            onClick={() => buttonPress('9')}
            className='dark-gray'
          >
            9
          </button>
          <button
            id='multiply'
            onClick={() => buttonPress('*')}
            className='yellow'
          >
            *
          </button>
          <button
            id='four'
            onClick={() => buttonPress('4')}
            className='dark-gray'
          >
            4
          </button>
          <button
            id='five'
            onClick={() => buttonPress('5')}
            className='dark-gray'
          >
            5
          </button>
          <button
            id='six'
            onClick={() => buttonPress('6')}
            className='dark-gray'
          >
            6
          </button>
          <button
            id='subtract'
            onClick={() => buttonPress('-')}
            className='yellow'
          >
            -
          </button>
          <button
            id='one'
            onClick={() => buttonPress('1')}
            className='dark-gray'
          >
            1
          </button>
          <button
            id='two'
            onClick={() => buttonPress('2')}
            className='dark-gray'
          >
            2
          </button>
          <button
            id='three'
            onClick={() => buttonPress('3')}
            className='dark-gray'
          >
            3
          </button>
          <button id='add' onClick={() => buttonPress('+')} className='yellow'>
            +
          </button>
          <button
            id='zero'
            onClick={() => buttonPress('0')}
            className='dark-gray'
          >
            0
          </button>
          <button
            id='decimal'
            onClick={() => buttonPress('.')}
            className='dark-gray'
          >
            .
          </button>
          <button
            id='equals'
            onClick={() => buttonPress('=')}
            className='yellow'
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
