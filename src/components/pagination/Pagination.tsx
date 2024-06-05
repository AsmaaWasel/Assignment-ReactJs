import React from "react";
import styles from "./Pagination.module.scss";

/**
 * Props interface for the Pagination component.
 */
type PaginationProps = {
  currentPage: number; // Current page number
  totalPages: number; // Total number of pages
  onPageChange: (pageNumber: number) => void; // Function to handle page change
};

/**
 * Pagination component renders pagination controls for navigating through pages.
 * @param {PaginationProps} props - Props for the Pagination component.
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Function to handle previous page button click
  const handlePrevPage = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Function to handle next page button click
  const handleNextPage = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Function to render page numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${styles.page__numbers} ${
            i === currentPage ? styles.active : ""
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  // Render the Pagination component
  return (
    <div id="app" className="container">
      <ul className={styles.pagination}>
        {/* Previous page button */}
        <li
          className={`${styles.page__btn} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
          onClick={handlePrevPage}
        ></li>
        {/* Render page numbers */}
        {renderPageNumbers()}
        {/* Render dots if there are more than 6 pages and current page is not close to the last page */}
        {totalPages > 6 && currentPage < totalPages - 3 && (
          <li className={styles.page__dots}>...</li>
        )}
        {/* Next page button */}
        <li
          className={`${styles.page__btn} ${
            currentPage === totalPages ? styles.disabled : ""
          }`}
          onClick={handleNextPage}
        ></li>
      </ul>
    </div>
  );
};

export default Pagination;
