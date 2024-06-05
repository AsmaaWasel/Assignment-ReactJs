import React from "react";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

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

  return (
    <div id="app" className="container">
      <ul className={styles.pagination}>
        <li
          className={`${styles.page__btn} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
          onClick={handlePrevPage}
        ></li>
        {renderPageNumbers()}
        {totalPages > 6 && currentPage < totalPages - 3 && (
          <li className={styles.page__dots}>...</li>
        )}
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
