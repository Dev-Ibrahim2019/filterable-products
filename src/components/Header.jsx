function Header({ categories, selectedCategory, onCategoryChange }) {
  return (
    <header className="header">
      <div className="title">
        <h1>Products List</h1>
      </div>
      <div className="filter">
        <select
          className="filter-dropdown"
          value={selectedCategory}
          onChange={onCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Header;
