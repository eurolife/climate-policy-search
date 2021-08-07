import * as types from './actionTypes';
import csvToJson from '../helpers/csv-to-json';
import axios from 'axios';

export const setPolicies = (data) => ({
  type: types.SET_POLICIES,
  data,
});

export const setSectors = (data) => ({
  type: types.SET_SECTORS,
  data,
});

export const loadPolicies = () => (dispatch, getState) => {
  return new Promise((onSuccess) => {
    axios.get('/api/policies')
      .then((result) => {
        const data = csvToJson(result.data)
        dispatch(setPolicies(data))
        getSectors(data);
      })
      .catch((error) => {
        console.log(error)
      })
    onSuccess(getState().policies);
  })
}

export const getSectors = (data) => (dispatch, getState) => {
  const arr = [];
  data.map((item) => {
    const obj = {
      name: item.sectors,
    }
    arr.push(obj)
  })
}