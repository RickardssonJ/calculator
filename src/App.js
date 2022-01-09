import React, { useState } from 'react';
import { Wrapper } from './components/Wrapper';
import { Screen } from './components/Screen';
import { ButtonBox } from './components/ButtonBox';
import { Button } from './components/Button';
import './App.css';

function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    numTwo: 0,
    res: 0,
  })

  const btnValues = [
    ["C", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const resetClickHandler = (e) => {
    setCalc({
      sign: "",
      num: 0,
      numTwo: 0,
      res: 0
    })
  }

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML

    if (!calc.num || !calc.sign) {
      setCalc({
        ...calc,
        num: Number(calc.num + value)
      })
    } else if (calc.num && calc.sign) {
      setCalc({
        ...calc,
        numTwo: Number(calc.numTwo + value)
      })
    }
    console.log(calc)
  }

  const signClickHandler = (e) => {
    e.preventDefault();
    const clickedSign = e.target.innerHTML

    setCalc({
      ...calc,
      sign: clickedSign === "x" ? "*" : clickedSign
    });
  }

  const commaClickHandler = () => {

    setCalc({
      ...calc,
      num: calc.num.toString().includes(".") ? calc.num : calc.num + ".",
      numTwo: calc.numTwo ? calc.numTwo + "." : calc.numTwo
    })
  }

  const equalsClickHandler = () => {
    let resultStr = `${calc.num}${calc.sign}${calc.numTwo}`
    console.log(resultStr)
    const resultNumber = eval(resultStr)

    setCalc({
      ...calc,
      sign: "",
      num: resultNumber,
      numTwo: 0,
      res: resultNumber,

    })
    console.log(calc.res)
    console.log(calc)
  }



  return (
    <Wrapper>
      <Screen value={calc.sign && calc.numTwo ? calc.numTwo : calc.num + calc.sign} />
      <ButtonBox>
        {btnValues.flat().map((btn, index) => {
          return (
            <Button
              key={index}
              value={btn}
              className={btn === "=" ? "equals" : btn === "C" ? "clear" : ""}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "+" || btn === "-" || btn === "x" || btn === "/"
                    ? signClickHandler
                    : btn === "="
                      ? equalsClickHandler
                      : btn === "."
                        ? commaClickHandler
                        : numClickHandler
              } />
          )
        })}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
