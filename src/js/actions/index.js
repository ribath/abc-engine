import { GOTO_PREV_PAGE, ADD_SUCCESS_STEP1, ADD_SUCCESS_STEP2 } from '../constants/action-types';

export function pageChange(payload) {
  return { type: GOTO_PREV_PAGE, payload };
}

export function addStep1(payload) {
  return { type: ADD_SUCCESS_STEP1, payload };
}

export function addStep2(payload) {
  return { type: ADD_SUCCESS_STEP2, payload };
}
