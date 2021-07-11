import { connect } from 'react-redux';
import ButtonsRow from './ButtonsRow';
import {setDisplay, resetDisplay, setTotal, setOperator,  reset} from '../state/action'

function CalcDisplay(props) {

    
    
    function displayNumber(e){
        if(!props.pushOperator){
            props.dispatch(resetDisplay(e.currentTarget.childNodes[0].innerHTML));
        } else {
            props.dispatch(setDisplay(e.currentTarget.childNodes[0].innerHTML));

        }
    } 

    function operators(e){
        let operator = e.currentTarget.childNodes[0].innerHTML;
        props.dispatch(setOperator(operator));                   
    }
    
    function resetAll(){
        props.dispatch(reset());                                              
    }

    function equal(){
        props.dispatch(setTotal())           
    }
    let buttons = [[
        {symbol: "1", clickFunction: displayNumber, cssClass: ""},
        {symbol: "2", clickFunction: displayNumber, cssClass: ""},
        {symbol: "3", clickFunction: displayNumber, cssClass: ""},
    ], [
        {symbol: "4", clickFunction: displayNumber, cssClass: ""},
        {symbol: "5", clickFunction: displayNumber, cssClass: ""},
        {symbol: "6", clickFunction: displayNumber, cssClass: ""},
    ], [
        {symbol: "7", clickFunction: displayNumber, cssClass: ""},
        {symbol: "8", clickFunction: displayNumber, cssClass: ""},
        {symbol: "9", clickFunction: displayNumber, cssClass: ""},
    ], [
        {symbol: "0", clickFunction: displayNumber, cssClass: ""},
        {symbol: ".", clickFunction: displayNumber, cssClass: ""},
        {symbol: "+", clickFunction: operators, cssClass: "operators"},
    ], [
        {symbol: "-", clickFunction: operators, cssClass: "operators"},
        {symbol: "*", clickFunction: operators, cssClass: "operators"},
        {symbol: "/", clickFunction: operators, cssClass: "operators"},
    ], [
        {symbol: "AC", clickFunction: resetAll, cssClass: "alert"},
        {symbol: "=", clickFunction: equal, cssClass: "alert"},
    ]

]
    
    return (
        <>
            {buttons.map((array, index)=> <ButtonsRow buttons={array} key={index} /> )}     
        </>
    )
}

function mapStateToProps(state) {
    return {
        pushOperator: state.push,
        display: state.display
    }
}

export default connect(mapStateToProps)(CalcDisplay);