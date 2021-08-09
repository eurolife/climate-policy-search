import { useState, useEffect } from 'react';
import ListItem from './ListItem';

const List = ({items, perPage, pageNumber}) => {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const setLimits = () => {
    const start = (perPage * pageNumber) - perPage + 1;
    const end = start + perPage;
    setStart(start);
    setEnd(end);
  }
  useEffect(() => {
    if(items?.length) {
      setLimits();
    }
  }, [items, pageNumber])

  useEffect(() => {
  }, [start, end])
  return (
    <ul>
      {items?.map((item, index) => (
        index + 1 >= start && index + 1 < end &&
          <li key={index} className="mt-6"> 
          <ListItem id={item.policy_id} title={item.policy_title} text={item.description_text} sectors={item.sectors.split(';')} />
        </li>
        
      ))}
      
    </ul>
  )
}
export default List;