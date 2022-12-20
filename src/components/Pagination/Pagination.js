import React from "react";
import "./Pagination.css";
import { DOTS, usePagination } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = (e) => {
    e.preventDefault();
    onPageChange(currentPage + 1);
  };
  const onPrevious = (e) => {
    e.preventDefault();
    onPageChange(currentPage - 1);
  };

  // let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div style={{ paddingTop: "14px" }}>
      <ul id="pagination">
        <li onClick={onPrevious}>
          <a href="#">«</a>
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li key={index} onClick={() => onPageChange(pageNumber)}>
              <a className={currentPage == pageNumber ? "active" : null}>
                {pageNumber}
              </a>
            </li>
          );
        })}
        <li onClick={onNext}>
          <a href="#">»</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
