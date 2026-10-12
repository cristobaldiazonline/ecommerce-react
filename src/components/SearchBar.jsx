function SearchBar(props) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder="Buscar productos..."
    />
  )
}

export default SearchBar