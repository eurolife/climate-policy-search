import produce from 'immer';
import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

const sectorsReducer = (state = initialState.sectors, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.SET_SECTORS:
        return draft = action.data;
      default:
        break;
    }
  })
}
export default sectorsReducer;