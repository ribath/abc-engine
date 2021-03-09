/* eslint-disable max-len */
import { GOTO_PREV_PAGE, ADD_SUCCESS_STEP1, ADD_SUCCESS_STEP2 } from '../constants/action-types';

const initialState = {
  page: 1,
  name: '',
  description: '',
  client: '',
  contractor: '',
  csv_data: '',
  max_x: '',
  min_x: '',
  max_y: '',
  min_y: '',
  max_z: '',
  min_z: ''
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_SUCCESS_STEP1) {
    return { ...state, ...action.payload };
  } if (action.type === ADD_SUCCESS_STEP2) {
    return { ...state, ...action.payload };
  } if (action.type === GOTO_PREV_PAGE) {
    return { ...state, ...action.payload };
  }
  return state;
}
export default rootReducer;
