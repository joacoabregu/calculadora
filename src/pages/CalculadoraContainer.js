import {useState} from 'react'

import CalcDisplay from './CalcDisplay';
function Container(){
    let [display, setDisplay] = useState("");
    let [calculo, setCalculo] = useState(0);
    let [prevNumb, setPrevNumb] = useState("");
    let [nextNumb, setNextNumb] = useState("");

    let [pushOperator, setPushOperator] = useState(false)

    function displayNumber(e){
        if(pushOperator){
            setDisplay( e.currentTarget.childNodes[0].innerHTML)
            setPushOperator(false)
        } else {
            setDisplay(display + e.currentTarget.childNodes[0].innerHTML)
        }
    }
    function operators(e){
        let operator = e.currentTarget.childNodes[0].innerHTML;
        setPushOperator(true)
        if(!calculo){
            setCalculo(Number(display));
            return;
        }
        console.log(operator)
        switch(operator){
            case "+":
                setCalculo(calculo + Number(display));
                break;
            case "-":
                setCalculo(calculo - Number(display));
                break;
            case "*":
                setCalculo(calculo * Number(display));
                break;    
            case "/":
                setCalculo(calculo / Number(display));
                break;
            default:
                setCalculo(display)
                break;    

        }
    }
    function reset(e){
        setDisplay("");
        setCalculo(0);
    }
    function equal(e){
        setDisplay(calculo)
    }
    let displayValue;
    if(display){
        displayValue= display;
    } else {
        displayValue = "0";
    }

    return (
        <section className="container">
            <div className="wrapper">
                <div id="display">
                    {displayValue}
                    
                </div>
                <CalcDisplay display={display} displayNumber={displayNumber} operators={operators} reset={reset} equal={equal}/>  
            </div>
            {calculo}
        </section>
    )
}

export default Container;