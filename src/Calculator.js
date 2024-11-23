// src/Calculator.js
import React, { useState } from 'react';
import './index.css';

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const appendToDisplay = (value) => {
        setDisplay(display + value);
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    const calculateResult = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={display} disabled />
            <div className="buttons">
                <button onClick={clearDisplay}>C</button>
                <button onClick={() => appendToDisplay('7')}>7</button>
                <button onClick={() => appendToDisplay('8')}>8</button>
                <button onClick={() => appendToDisplay('9')}>9</button>
                <button onClick={() => appendToDisplay('/')}>/</button>
                <button onClick={() => appendToDisplay('4')}>4</button>
                <button onClick={() => appendToDisplay('5')}>5</button>
                <button onClick={() => appendToDisplay('6')}>6</button>
                <button onClick={() => appendToDisplay('*')}>*</button>
                <button onClick={() => appendToDisplay('1')}>1</button>
                <button onClick={() => appendToDisplay('2')}>2</button>
                <button onClick={() => appendToDisplay('3')}>3</button>
                <button onClick={() => appendToDisplay('-')}>-</button>
                <button onClick={() => appendToDisplay('0')}>0</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={() => appendToDisplay('+')}>+</button>
            </div>
        </div>
    );
};

export default Calculator;