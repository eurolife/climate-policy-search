import ListItem from './ListItem';

const List = ({items}) => {
  return (
    <ul>
      {items?.map((item, index) => (
        <li key={index} className="mt-6">
          <ListItem id={item.policy_id} title={item.policy_title} text={item.description_text} sectors={item.sectors.split(';')} />
        </li>
      ))}
      
    </ul>
  )
}
export default List;