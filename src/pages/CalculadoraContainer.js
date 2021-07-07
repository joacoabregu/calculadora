import {useState, useEffect} from 'react';
import CalcDisplay from './CalcDisplay';

function Container(){
    let [display, setDisplay] = useState("");
    let [total, setTotal] = useState("0");
    let [prevNumb, setPrevNumb] = useState("");
    let [nextNumb, setNextNumb] = useState("");
    let [operatorValue, setOperatorValue] = useState("");
    let [pushOperator, setPushOperator] = useState(true);

    useEffect(() => {
        if(isNaN(display)){       
            reset();
            alert("Enter valid number")       
        }
        if(pushOperator){          
            setPrevNumb(display);
        } else {
            setNextNumb(display);                
        }
    }, [display, pushOperator])

    useEffect(() =>{
        setDisplay(total);
    }, [total])

    //console.log(prevNumb, nextNumb, operatorValue, pushOperator)
    function displayNumber(e){
        if(pushOperator){
            setDisplay( e.currentTarget.childNodes[0].innerHTML);            
            setPushOperator(false);
        } else {
            setDisplay(display + e.currentTarget.childNodes[0].innerHTML);            
        }
    }

    function operators(e){
        if(!pushOperator){
            calculate(prevNumb, operatorValue, nextNumb);
        }
        
        let operator = e.currentTarget.childNodes[0].innerHTML;
        setOperatorValue(operator);
        setPushOperator(true);           
    }

    function calculate(firstValue, operator, secondValue){
        switch(operator){
            case "+":
                setTotal(parseFloat(firstValue) + parseFloat(secondValue));
                break;
            case "-":
                setTotal(parseFloat(firstValue) - parseFloat(secondValue));
                break;
            case "*":
                setTotal(parseFloat(firstValue) * parseFloat(secondValue));
                break;    
            case "/":
                setTotal(parseFloat(firstValue) / parseFloat(secondValue));                
                break;
            default:
                setTotal(display)
                break;    

        }
    }
    function reset(){
        setDisplay("0");
        setNextNumb("");
        setPrevNumb("");
        setOperatorValue("");
        setTotal("0");
        setPushOperator(true);           
    }
    function equal(e){
        calculate(prevNumb, operatorValue, nextNumb);
        setDisplay(total)
        setPushOperator(true);           
    }

    
    
    return (
        <section className="container">
            <div className="wrapper">
                <div id="display">
                    {display}                 
                </div>
                <CalcDisplay display={display} displayNumber={displayNumber} operators={operators} reset={reset} equal={equal}/>  
            </div>
        </section>
    )
}

export default Container;