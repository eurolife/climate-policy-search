import PropTypes from 'prop-types';

const TextInput = ({label, name, value, placeholder, type, onChange}) => {
  return (
    <div className="my-2">
      <label className="font-bold">{label}</label>
        <input name={name} type={type} onChange={onChange} defaultValue={value} className="rounded-lg p-2 bg-white flex justify-start items-center border border-lightgrey w-full" placeholder={placeholder} />
    </div>
  )
}
TextInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired, 
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
TextInput.defaultProps = {
  placeholder: '',
  type: 'text',
  value: '',
  onChange: () => {}
}
export default TextInput;
