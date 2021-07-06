import {useState, useEffect} from 'react'

import CalcDisplay from './CalcDisplay';
function Container(){
    let [display, setDisplay] = useState("");
    let [calculo, setCalculo] = useState(0);
    let [prevNumb, setPrevNumb] = useState("");
    let [nextNumb, setNextNumb] = useState("");
    let [operatorValue, setOperatorValue] = useState("");
    let [pushOperator, setPushOperator] = useState(true);

    useEffect(() => {
        if(pushOperator){
            
            setPrevNumb(display)


        } else {
            setNextNumb(display)
            
            
        }
    }, [display, pushOperator])
    useEffect(() =>{
        setDisplay(calculo)
    }, [calculo])

    console.log(prevNumb, nextNumb, operatorValue)
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
        setOperatorValue(operator)
        setPushOperator(true)
        

        
    }

    function calculate(firstValue, operator, secondValue){
        switch(operator){
            case "+":
                setCalculo(Number(firstValue) + Number(secondValue));
                break;
            case "-":
                setCalculo(Number(firstValue) - Number(secondValue));
                break;
            case "*":
                setCalculo(Number(firstValue) * Number(secondValue));
                break;    
            case "/":
                setCalculo(Number(firstValue) / Number(secondValue));                
                break;
            default:
                setCalculo(display)
                break;    

        }
    }
    function reset(e){
        setDisplay("");
        setNextNumb("");
        setPrevNumb("");
        setOperatorValue("");
        setCalculo(0);
    }
    function equal(e){
        calculate(prevNumb, operatorValue, nextNumb);
        setDisplay(calculo)
    }
    
    

    return (
        <section className="container">
            <div className="wrapper">
                <div id="display">
                    {display}
                    
                </div>
                <CalcDisplay display={display} displayNumber={displayNumber} operators={operators} reset={reset} equal={equal}/>  
            </div>
            {calculo}
        </section>
    )
}

export default Container;