import { useState } from 'react';
const useGetPages = () => {
  const [pageCount, setPageCount] = useState(1);
  const getPages = (perPage, items) => {
    const pages = Math.ceil(items.length/perPage);
    setPageCount(pages)
  }
  return [getPages, pageCount];
}
export default useGetPages