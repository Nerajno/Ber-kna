'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

type CalculatorButtonProps = {
  id: string
  onClick: () => void
  className?: string
  children: React.ReactNode
}

const CalculatorButton = ({ id, onClick, className, children }: CalculatorButtonProps) => (
  <button
    id={id}
    onClick={onClick}
    className={`h-14 w-full rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground ${className}`}
  >
    {children}
  </button>
)

// Utility to safely evaluate expressions without `eval`
const safeEvaluate = (expression: string): string => {
  try {
    // Replace operators to match JavaScript's precedence
    const parsedExpression = expression.replace(/÷/g, '/').replace(/×/g, '*')
    const result = Function(`"use strict"; return (${parsedExpression})`)()
    return result.toString()
  } catch {
    return 'Error'
  }
}

export default function () {
  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState('')

  const isOperator = (symbol: string) => ['+', '-', '*', '/'].includes(symbol)

  const handleClear = () => {
    setDisplay('0')
    setExpression('')
  }

  const calculate = () => {
    if (isOperator(expression.trim().slice(-1))) return

    const result = safeEvaluate(expression)
    setDisplay(result)
    setExpression('')
  }

  const handleButtonPress = (symbol: string) => {
    switch (symbol) {
      case 'clear':
        handleClear()
        break
      case 'negative':
        setDisplay(prev => (prev.startsWith('-') ? prev.slice(1) : '-' + prev))
        break
      case 'percentage':
        setDisplay(prev => (parseFloat(prev) / 100).toString())
        break
      case '=':
        calculate()
        break
      case '.':
        if (!display.includes('.') && !isOperator(display)) {
          setDisplay(prev => prev + '.')
          setExpression(prev => prev + '.')
        }
        break
      case '+':
      case '-':
      case '*':
      case '/':
        if (!isOperator(display)) {
          setExpression(prev => prev + ' ' + symbol + ' ')
          setDisplay(symbol)
        }
        break
      default:
        setDisplay(prev => (prev === '0' || isOperator(prev) ? symbol : prev + symbol))
        setExpression(prev => prev + symbol)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 h-16 mb-4 p-2 text-right text-2xl font-mono bg-secondary rounded-md overflow-hidden">
            {display}
          </div>
          <CalculatorButton id="clear" onClick={() => handleButtonPress('clear')} className="col-span-2">
            Clear
          </CalculatorButton>
          <CalculatorButton id="negative" onClick={() => handleButtonPress('negative')}>
            +/-
          </CalculatorButton>
          <CalculatorButton id="percentage" onClick={() => handleButtonPress('percentage')}>
            %
          </CalculatorButton>
          {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+'].map((btn) => (
            <CalculatorButton
              key={btn}
              id={typeof btn === 'number' ? `digit-${btn}` : btn === '.' ? 'decimal' : btn}
              onClick={() => handleButtonPress(btn.toString())}
              className={isOperator(btn.toString()) ? 'bg-primary text-primary-foreground' : ''}
            >
              {btn}
            </CalculatorButton>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


