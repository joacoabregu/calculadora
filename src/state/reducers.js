
import {
  SET_DISPLAY,
  RESET_DISPLAY, 
  SET_TOTAL, 
  //SET_PREV_NUMB, 
  //SET_NEXT_NUMB, 
  SET_OPERATOR,
  //SET_PUSH,
  RESET
  } from './actionTypes';


let initialState = {
  display: "0", 
  total: "0",
  prevNumb: "", 
  nextNumb: "",
  operator: "",
  push: false
}

function calculate(firstValue, operator, secondValue){
  switch(operator){
      case "+":
          return (parseFloat(firstValue) + parseFloat(secondValue));
      case "-":
          return (parseFloat(firstValue) - parseFloat(secondValue));
      case "*":
          return (parseFloat(firstValue) * parseFloat(secondValue));    
      case "/":
          return (parseFloat(firstValue) / parseFloat(secondValue));                
      default:
          return ("0");    

  }
}


export default function CalculatorApp(state = initialState, action){

  switch(action.type){
    case SET_DISPLAY:
      let newDisplay = state.display + action.payload;
      return { ...state, display: newDisplay};
    case RESET_DISPLAY:
      if(state.nextNumb){
        return { ...state, display: action.payload, push: true, prevNumb: state.total};
      }
      return { ...state, display: action.payload, push: true};
    case SET_TOTAL:
      let newTotal = calculate(state.prevNumb, state.operator, state.display)
      return {...state, display: newTotal, total: newTotal, prevNumb: newTotal, nextNumb: "", push: false};
    /* case SET_PREV_NUMB:
      let newPrev = state.display
      return {...state, prevNumb: newPrev};
    case SET_NEXT_NUMB:
      let newNext = state.display
      return {...state, prevNumb: newNext}; */
    case SET_OPERATOR:
      if(state.push && state.total !== "0"){
         let newTotal = calculate(state.prevNumb, state.operator, state.display) 
        return {...state, operator: action.payload, prevNumb: newTotal, nextNumb: state.display, total: newTotal, push: false}
      } 
       if(state.push && state.prevNumb){
        let newTotal = calculate(state.prevNumb, state.operator, state.display)
      return {...state, operator: action.payload, push: false, nextNumb: state.display, total: newTotal};
      } 
      return {...state, operator: action.payload, push: false, prevNumb: state.display};
    /* case SET_PUSH:
      return {...state, push: action.payload}; */
    
    case RESET:
      return initialState;


    default:
      return state;
  }

}
