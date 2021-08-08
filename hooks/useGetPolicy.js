import { useState } from 'react';

const useGetPolicy = (policies) => {
  const [policy, setPolicy] = useState(null)
  const findPolicy = (id) => {
    const p = policies.find((item) => item.policy_id === id);
    setPolicy(p);
  }
  return [findPolicy, policy];
};
export default useGetPolicy;