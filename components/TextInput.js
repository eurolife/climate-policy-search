import PropTypes from 'prop-types';

const TextInput = ({label, placeholder, type}) => {
  return (
    <div className="my-2">
      <label className="font-bold">{label}</label>
        <input type={type} className="rounded-lg p-2 bg-white flex justify-start items-center border border-lightgrey w-full" placeholder={placeholder} />
    </div>
  )
}
TextInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}
TextInput.defaultProps = {
  placeholder: '',
  type: 'text'
}
export default TextInput;
