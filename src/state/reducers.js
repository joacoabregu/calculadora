import { combineReducers } from 'redux';
import {
  SET_DISPLAY, 
  SET_TOTAL, 
  SET_PREV_NUMB, 
  SET_NEXT_NUMB, 
  SET_OPERATOR,
  SET_PUSH} from './actionTypes';

function displayReducer (state = "", action){
    switch(action.type){
      case SET_DISPLAY:
        return state + action.payload;

      default:
        return state;
    }
}

function totalReducer (state = "", action){
  switch(action.type){
    case SET_TOTAL:
      return action.payload;

    default:
      return state;
  }
}

function prevNumbReducer (state = "", action){
  switch(action.type){
    case SET_PREV_NUMB:
      return action.payload;

    default:
      return state;
  }
}

function nextNumbReducer (state = "", action){
  switch(action.type){
    case SET_NEXT_NUMB:
      return action.payload;

    default:
      return state;
  }
}

function operatorReducer (state = "", action){
  switch(action.type){
    case SET_OPERATOR:
      return action.payload;

    default:
      return state;
  }
}

function pushReducer (state = true, action){
  switch(action.type){
    case SET_PUSH:
      return action.payload;

    default:
      return state;
  }
}

const CalculatorApp = combineReducers({
  displayReducer,
  totalReducer,
  prevNumbReducer,
  nextNumbReducer,
  operatorReducer,
  pushReducer
})

export default CalculatorApp;