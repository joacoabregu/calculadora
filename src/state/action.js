import {
  SET_DISPLAY, 
  SET_TOTAL, 
  SET_PREV_NUMB, 
  SET_NEXT_NUMB, 
  SET_OPERATOR,
  SET_PUSH} from './actionTypes';


export function setDisplay(payload) {
    return {
      type: SET_DISPLAY,
      payload
    }
}

export function setTotal(payload) {
    return {
      type: SET_TOTAL,
      payload
    }
}

export function setPrevNumb(payload) {
    return {
      type: SET_PREV_NUMB,
      payload
    }
}

export function setNextNumb(payload) {
    return {
      type: SET_NEXT_NUMB,
      payload
    }
}

export function setOperator(payload) {
    return {
      type: SET_OPERATOR,
      payload
    }
}

export function setPush(payload) {
    return {
      type: SET_PUSH,
      payload
    }
}