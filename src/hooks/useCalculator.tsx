import { useState, useRef } from 'react';

enum Operators {
  sum, extract, div, multiply
};

export const useCalculator = () => {
  const [state, setState] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');
  const operationRef = useRef<Operators>();

  const handleClean = () => {
    setState('0');
    setPrevNumber('0');
  };

  const buildNumber = (stringNumber: string) => {
    if (stringNumber === '0' && state === '0') return;
    if (state.includes('.') && stringNumber === '.') return;
    if (state.startsWith('0') || state.startsWith('-0')) {
      if (stringNumber === '.') {
        setState(state + stringNumber)
      } else if (stringNumber === '0' && state.includes('.')) {
        setState(state + stringNumber);
      } else if (stringNumber !== '0' && !state.includes('.')) {
        setState(stringNumber);
      } else if (stringNumber === '0' && !state.includes('.')) {
        setState(state)
      } else {
        setState(state + stringNumber);
      }
    } else {
      setState(state + stringNumber);
    }
  };

  const positiveNegative = () => {
    if (state.includes('-')) {
      setState(state.replace('-', ''));
    } else {
      setState(`-${state}`);
    }
  };

  const removeOne = () => {
    if (state.length === 1 || (state.length === 2 && state.includes('-'))) {
      setState('0');
      return;
    }
    setState(state.slice(0, -1));
  };

  const saveNumber = () => {
    if (state.endsWith('.'))
      setPrevNumber(state.replace('.', ''))
    else
      setPrevNumber(state);
    setState('0');
  }

  const divide = () => {
    saveNumber();
    operationRef.current = Operators.div;
  }

  const multiply = () => {
    saveNumber();
    operationRef.current = Operators.multiply;
  }

  const extract = () => {
    saveNumber();
    operationRef.current = Operators.extract;
  }

  const sum = () => {
    saveNumber();
    operationRef.current = Operators.sum;
  }

  const calculation = () => {
    const number1 = Number(state);
    const number2 = Number(prevNumber);
    switch(operationRef.current) {
      case Operators.sum:
        setState(`${number1 + number2}`)
        break;
      case Operators.extract:
        setState(`${number1 - number2}`)
        break;
      case Operators.multiply:
        setState(`${number1 * number2}`)
        break;
      case Operators.div:
        setState(`${number2 / number1}`)
        break;
    }
    setPrevNumber('0');
  }

  return { handleClean, buildNumber, positiveNegative, removeOne, divide, multiply, extract, sum, calculation, state, prevNumber };
};