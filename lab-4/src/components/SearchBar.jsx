export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <search className="search-bar">
      <input
        type="search"
        value={filterText}
        onChange={(event) => onFilterTextChange(event.target.value)}
        placeholder="Пошук у меню"
        aria-label="Пошук у меню"
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(event) => onInStockOnlyChange(event.target.checked)}
        />{' '}
        Лише в наявності
      </label>
    </search>
  )
}
