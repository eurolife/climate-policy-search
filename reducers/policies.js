import produce from 'immer';
import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

const policiesReducer = (state = initialState.policies, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.SET_POLICIES:
        return draft = action.data;
      case types.UPDATE_METADATA:
        // payload = object {id, organisation, location, date, concerns}
        const { id, organisation, location, date, concerns } = action.data;
        const policy = draft.find((policy) => policy.policy_id === id);
        policy.organisation = organisation;
        policy.location = location;
        policy.date = date;
        policy.concerns = concerns;
        
        break;
    }
  })
}
export default policiesReducer;