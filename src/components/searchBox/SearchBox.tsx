// SearchBox.tsx
import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBox: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles["search-box"]}>
      <button className={styles["btn-search"]}>
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className={styles["input-search"]}
        placeholder="Type to Search..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
