import { useState } from 'react';

const useGetPolicies = (policies) => {
  const [filteredPolicies, setFilteredPolicies] = useState(null)
  const getBySector = (sector) => {
    setFilteredPolicies(policies.filter((policy) => policy.sectors.indexOf(sector) > -1));
  }
  return [getBySector, filteredPolicies];
};
export default useGetPolicies;