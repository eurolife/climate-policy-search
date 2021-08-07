const Button = ({onClick, extraClasses, children}) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-blue text-white px-4 py-2 hover:bg-darkblue transition duration-300 flex justify-center items-center rounded-xl ${extraClasses}`}
    >
      {children}
    </button>
  )
}
export default Button;