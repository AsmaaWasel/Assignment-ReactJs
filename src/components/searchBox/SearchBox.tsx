import React from "react";
import styles from "./SearchBar.module.scss"; // Import CSS module for styling

/**
 * Props interface for the SearchBox component
 */
interface SearchBoxProps {
  /**
   * Function to handle search.
   * @param query - The search query string.
   */
  onSearch: (query: string) => void;
}

/**
 * SearchBox component renders a search input field with a search button.
 * @param {SearchBoxProps} props - Props for the SearchBox component.
 */
const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  /**
   * Event handler for input change.
   * Calls the onSearch function with the input value.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  /**
   * Render the SearchBox component.
   */
  return (
    <div className={styles["search-box"]}>
      {/* Search button */}
      <button className={styles["btn-search"]}>
        {/* Search icon */}
        <i className="fas fa-search"></i>
      </button>
      {/* Search input */}
      <input
        type="text"
        className={styles["input-search"]}
        placeholder="Type to Search..."
        onChange={handleInputChange} // Call handleInputChange on input change
      />
    </div>
  );
};

export default SearchBox; // Export the SearchBox component
