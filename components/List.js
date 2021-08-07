import ListItem from './ListItem';

const List = () => {
  return (
    <ul>
      <li className="mt-6">
        <ListItem title="Policy Title lksjf lkjsf lsjfsk" url="policy" sectors={['Agriculture', 'Energy']} />
      </li>
      <li className="mt-6">
        <ListItem title="Policy Blah blah blah" url="policy" sectors={['Agriculture', 'Economy-wide', 'Health']} />
      </li>
    </ul>
  )
}
export default List;