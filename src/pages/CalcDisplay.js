import { connect } from 'react-redux';
import Buttons from './Buttons';
import {setDisplay, setTotal,setPrevNumb, setNextNumb, setOperator, setPush} from '../state/action'


function CalcDisplay(props) {
    
    function displayNumber(e){
        if(props.pushOperator){
            //setDisplay( e.currentTarget.childNodes[0].innerHTML);
            props.dispatch(setDisplay(e.currentTarget.childNodes[0].innerHTML))
            props.dispatch(setPrevNumb(props.display));            
            props.dispatch(setPush(true))
        } else {
            //setDisplay(props.display + e.currentTarget.childNodes[0].innerHTML);
            props.dispatch(setDisplay(e.currentTarget.childNodes[0].innerHTML))
            props.dispatch(setNextNumb(props.display));            
        }
    }

    function operators(e){
        if(!props.pushOperator){
            calculate(props.prevNumb, props.operatorValue, props.nextNumb);
        }
        
        let operator = e.currentTarget.childNodes[0].innerHTML;
        props.dispatch(setOperator(operator));    
        props.dispatch(setPush(true));           
    }
    function calculate(firstValue, operator, secondValue){
        switch(operator){
            case "+":
                props.dispatch(setTotal(parseFloat(firstValue) + parseFloat(secondValue)));
                break;
            case "-":
                props.dispatch(setTotal(parseFloat(firstValue) - parseFloat(secondValue)));
                break;
            case "*":
                props.dispatch(setTotal(parseFloat(firstValue) * parseFloat(secondValue)));
                break;    
            case "/":
                props.dispatch(setTotal(parseFloat(firstValue) / parseFloat(secondValue)));                
                break;
            default:
                props.dispatch(setTotal(props.display));
                break;    

        }
    }

    function reset(){
        props.dispatch(setDisplay("0"));            
        props.dispatch(setNextNumb(""));            
        props.dispatch(setPrevNumb(""));            
        props.dispatch(setOperator(""));            
        props.dispatch(setTotal("0"));            
        props.dispatch(setPush(true));            
                           
    }
    function equal(){
        calculate(props.prevNumb, props.operatorValue, props.nextNumb);
        props.dispatch(setDisplay(props.total));
        props.dispatch(setPush(true));           
    }
    

    return (
        <>
                <div className="row">
                    <Buttons symbol="1" onClickFunction={displayNumber}/>
                    <Buttons symbol="2" onClickFunction={displayNumber}/>
                    <Buttons symbol="3" onClickFunction={displayNumber}/>
                </div>
                <div className="row">
                    <Buttons  symbol="4" onClickFunction={displayNumber}/>
                    <Buttons symbol="5" onClickFunction={displayNumber} />
                    <Buttons symbol="6" onClickFunction={displayNumber} />
                </div>
                <div className="row">
                    <Buttons  symbol="7" onClickFunction={displayNumber} />
                    <Buttons symbol="8" onClickFunction={displayNumber}/>
                    <Buttons symbol="9" onClickFunction={displayNumber} />
                </div>
                <div className="row">
                    <Buttons symbol="0" onClickFunction={displayNumber} />
                    <Buttons symbol="." onClickFunction={displayNumber} />
                    <Buttons symbol="+" onClickFunction={operators} cssClass={"operators"} />
                </div>
                <div className="row">
                    <Buttons  symbol="-" onClickFunction={operators} cssClass={"operators"} />
                    <Buttons symbol="*" onClickFunction={operators} cssClass={"operators"} />
                    <Buttons symbol="/" onClickFunction={operators} cssClass={"operators"} />
                </div>
                <div className="row row-last">
                    <Buttons  symbol="AC" onClickFunction={reset} cssClass={"alert"} />
                    <Buttons  symbol="=" onClickFunction={equal} cssClass={"alert"} />                    
                </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        display: state.displayReducer,
        total: state.totalReducer,
        pushOperator: state.pushReducer,
        prevNumb: state.prevNumbReducer,
        nextNumb: state.nextNumbReducer
    }
}

export default connect(mapStateToProps)(CalcDisplay);