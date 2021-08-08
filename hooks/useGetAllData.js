import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPolicies } from '../actions';

const useGetAllData = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  const { policies, sectors, status} = state;
  const getAllData = () => {
    dispatch(loadPolicies());
  }
  useEffect(() => {
    if(state.policies.length === 0) {
      getAllData()
    }
  },[])
  return [policies, sectors, status];
}
export default useGetAllData;