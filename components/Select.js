import PropTypes from 'prop-types';

const Select = ({onChange, label, name, value, extraClasses, values}) => {
  return (
    <select defaultValue={value} name={name} onChange={onChange} className={`appearance-none my-2 rounded-lg p-2 bg-white flex justify-end items-center ${extraClasses}`}>
      <option value="" disabled readOnly>{label}</option>
      {values.map((item, index) => (
        <option key={index} value={item.value}>{item.label}</option>
      ))}
    </select>
  )
}
Select.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  extraClasses: PropTypes.string,
  values: PropTypes.array
}
Select.defaultProps = {
  onChange: () => {},
  name: '',
  value: '',
  extraClasses: '',
  values: []
}
export default Select;