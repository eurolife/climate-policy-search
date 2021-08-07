const SearchInput = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-lg p-1 bg-white flex justify-end items-center">
        <input type="text" className="p-1 w-48" placeholder="Search policies" />
        <button className="search-button">
          <img src="/images/search-icon.svg" alt="Search icon" />
        </button>
      </div>
    </form>

  )
}
export default SearchInput;