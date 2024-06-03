/**
 * Pagination component for navigating between pages.
 * @param currentPage The current page number.
 * @param totalPages The total number of pages.
 * @param onPageChange Function to handle page change.
 */

import React from "react";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number; // Current page number
  totalPages: number; // Total number of pages
  onPageChange: (pageNumber: number) => void; // Function to handle page change
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  /**
   * Handles the click event for navigating to the previous page.
   */
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  /**
   * Handles the click event for navigating to the next page.
   */
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
