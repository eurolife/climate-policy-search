import { combineReducers } from 'redux';
import policies from './policies';
import sectors from './sectors';
import status from './status';

export default combineReducers({status, policies, sectors})