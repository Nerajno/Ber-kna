import { useState } from 'react';


 export const useCalculatorLogic = () => {
   const [answer, setAnswer] = useState('');
   const [expression, setExpression] = useState('');

//   const isOperator = (symbol) => {
//     // Logic for checking if a symbol is an operator
//   };

  const handleClear = () => {
        setExpression('');
        setAnswer('');
  };

//   const calculate = () => {
//     // Logic for performing the calculation
//   };

//   const buttonPress = (symbol) => {
//     // Logic for handling button presses
//   };

//   return { answer, expression, buttonPress };
};
