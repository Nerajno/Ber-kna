import { useState } from 'react';
import './App.css';

export function App() {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState('');
  const et = expression.trim();

  // Function to check if a symbol is an operator
  const isOperator = (symbol: string) => {
    switch (symbol) {
      case '+':
      case '-':
      case '*':
      case '/':
        return true;
      default:
        return false;
    }
  };

  // Function to perform the calculation
  const calculate = () => {
    // If the last character is an operator, do not calculate
    if (isOperator(et.charAt(et.length - 1))) return;

    // Clean the expression so that two operators in a row use the last operator
    // For example: 5 * - + 5 = 10
    const parts = et.split(' ');
    const newParts = [];

    for (let i = 0; i < parts.length; i++) {
      if (['*', '/', '+'].includes(parts[i]) && isOperator(parts[i + 1])) {
        newParts.push(parts[i]);
        let j = 0;
        let k = i + 1;
        while (isOperator(parts[k])) {
          newParts.push(parts[k]);
          k++;
          j++;
        }
        i += j;
      } else {
        newParts.push(parts[i]);
      }
    }

    // Join the cleaned parts to form a new expression
    const newExpression = newParts.join(' ');

    // Evaluate and set the answer
    try {
      const result = eval(newExpression);
      if (!isNaN(result)) {
        setAnswer(result.toString());
      } else {
        // Handle invalid expressions
        setAnswer('Error');
      }
    } catch (error) {
      // Handle evaluation errors
      setAnswer('Error');
    }

    setExpression('');
  };


  // Function to handle button presses
  const buttonPress = (symbol: string) => {
    switch (symbol) {
      case 'clear':
        // Clear the expression and answer
        setExpression('');
        setAnswer('');
        break;
      case 'negative':
        if (answer === '') return;
        // Toggle the sign of the answer
        setAnswer(
          answer.toString().charAt(0) === '-' ? answer.slice(1) : '-' + answer
        );
        break;

      case 'perentage':
        if (answer === '') return;
        // Calculate percentage and set the answer
        setAnswer((parseFloat(answer.toString()) / 100).toString());
        break;
      case '=':
        // Trigger the calculation
        calculate();
        break;
      case '0':
       // Allow adding zeros to the expression, removing leading zeros
       setExpression(expression === '0' ? '0' : expression + symbol);
        break;
      case '.':
        // Allow adding a decimal point to the expression
        setExpression(expression + symbol);
        // Split by operators and get the last number
        const lastNum = expression.split(/[-+/*]/g).pop();
        if (!lastNum) return;
        if (lastNum?.includes('.')) return;
        setExpression(expression + symbol);
        break;
      default:
        // Handle other digits and symbols
        if (expression.charAt(0) === '0') {
          // Remove leading zero if it exists
          setExpression(expression.slice(1) + symbol);
        } else {
          setExpression(expression + symbol);
        }
        //TODO: 
        ('expression').innerText = expression;
        break;
    }
  };

  return (
    <>
      <div className='container'>
        <h1>Calculator Application</h1>
        <div id='calculator'>
          <div id='display' style={{ textAlign: 'right' }}>
            <div id='answer'>{answer || '0'}</div>
            <div id='expression'>{expression}</div>
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
