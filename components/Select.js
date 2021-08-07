import PropTypes from 'prop-types';

const Select = ({onChange, label, extraClasses}) => {
  return (
    <select value="" onChange={onChange} className={`appearance-none my-2 rounded-lg p-2 bg-white flex justify-end items-center ${extraClasses}`}>
      <option value="" disabled>{label}</option>
      <option value="Agriculture">Agriculture</option>
      <option value="Energy">Energy</option>
      <option value="Economy-wide">Economy-wide</option>
    </select>
  )
}
Select.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
}
Select.defaultProps = {
  onChange: () => {},
  extraClasses: ''
}
export default Select;