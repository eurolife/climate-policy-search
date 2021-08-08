import produce from 'immer';
import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

const statusReducer = (state = initialState.status, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.SET_STATUS:
        //payload: true or false
        return draft = action.data;
      default:
        break;
    }
  })
}
export default statusReducer;