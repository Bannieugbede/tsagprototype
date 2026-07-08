const SearchBar = ({ value, onChange, placeholder = "Search devotions..." }) => (
  <label className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-n-3">
    <span className="text-base">🔎</span>
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent text-base text-n-1 outline-none"
    />
  </label>
);

export default SearchBar;
