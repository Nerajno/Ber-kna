import { useState } from 'react';
import './App.css';

export function App() {
  const [answer, setAnswer] = useState('');
  const [expression, setExpression] = useState('');
  const et = expression.trim();

  //Function to check if a symbol is an operator
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
    for (let i = parts.length - 1; i >= 0; i--) {
      if (['*', '/', '+', '-'].includes(parts[i]) && isOperator(parts[i - 1])) {
        newParts.unshift(parts[i]);
        let j = 0;
        let k = i - 1;
        while (isOperator(parts[k])) {
          k--;
          j++;
        }
        i -= j;
      } else {
        newParts.unshift(parts[i]);
      }
    }

    // Join the cleaned parts to form a new expression
    const newExpression = newParts.join(' ');

    // Evaluate and set the answer
    if (isOperator(newExpression.charAt(0))) {
      setAnswer(eval(answer + newExpression) as string);
    } else {
      setAnswer(eval(newExpression) as string);
    }
    setExpression('');
  };

  const handleClear = () => {
    setExpression('');
    setAnswer('');
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
      case 'percentage':
        if (answer === '') return;
        // Calculate percentage and set the answer
        setAnswer((parseFloat(answer.toString()) / 100).toString());
        break;
      case '=':
        // Trigger the calculation
        calculate();
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        // Update the default value of answer when a number or operator is pressed
        setAnswer(symbol);
        // Handle other digits and symbols
        if (expression.charAt(0) === '0') {
          // Remove leading zero if it exists
          setExpression(expression.slice(1) + symbol);
        } else {
          setExpression(expression + symbol); // Append the symbol to the expression
        }
        break;
      case '.':
        // Allow adding a decimal point to the expression if the last character is a number
        if (/[\d.]$/.test(expression)) {
          // Check if the last number already has a decimal point
          const lastNum = expression.split(/[-+/*]/g).pop();
          if (!lastNum || !lastNum.includes('.')) {
            setExpression(expression + symbol);
          }
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        // Update the default value of answer when an operator is pressed
        setAnswer(symbol);
        setExpression(expression + ' ' + symbol + ' ');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='container'>
        <h1>Calculator Application</h1>
        <div id='calculator'>
          <div id='display' style={{ textAlign: 'right' }}>
            {answer !== '' ? answer : '0'}
            {expression.replace(/^0+/, '')}
          </div>
          <button id='clear' onClick={handleClear} className='light-gray'>
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


//notes
