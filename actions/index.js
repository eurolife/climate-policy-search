import * as types from './actionTypes';
import csvToJson from '../helpers/csv-to-json';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const setPolicies = (data) => ({
  type: types.SET_POLICIES,
  data,
});

export const setSectors = (data) => ({
  type: types.SET_SECTORS,
  data,
});

export const setStatus = (data) => ({
  type: types.SET_STATUS,
  data,
});

export const setMetadata = (data) => ({
  type: types.UPDATE_METADATA,
  data,
});

export const updateMetadata = (data) => (dispatch, getState) => {
  const status = getState().status;
  dispatch(setStatus({loading: true, processed: false}));
  // simulate latency
  setTimeout(() => {
    console.log(getState().status)
    dispatch(setMetadata(data))
    // set processed to true to temporarily show a success message
    dispatch(setStatus({loading: false, processed: true}));
    setTimeout(() => {
      dispatch(setStatus({...status, processed: false}));
    }, 4000)
  }, 2000);
}

export const loadPolicies = () => (dispatch, getState) => {
  const status = getState().status;
  dispatch(setStatus({...status, loading: true}));
  return new Promise((onSuccess) => {
    
    axios.get('/api/policies')
      .then((result) => {
        const data = csvToJson(result.data)
        dispatch(setPolicies(data));
        dispatch(getSectors(data));
      })
      .catch((error) => {
        console.log(error)
      })
    onSuccess(getState().policies);
  })
}

export const getSectors = (data) => (dispatch, getState) =>  {
  const status = getState().status;
  const arr = [];
  const tempArr = [];
  data.forEach((item) => {
    const sectors = item.sectors.split(';');
    sectors.forEach((sector) => {
      const obj = {};
      if(tempArr.indexOf(sector) === -1) {
        obj.id = uuidv4();
        obj.name = sector;
        obj.policy_ids = [];
        obj.policy_ids.push(item.policy_id);
        arr.push(obj)
        tempArr.push(sector)
      }
      else {
        const obj = arr.find((p) => p.name === sector)
        obj.policy_ids.push(item.policy_id);
      }
    })
  })
  dispatch(setSectors(arr));
  dispatch(setStatus({...status, loading: false}));
}




