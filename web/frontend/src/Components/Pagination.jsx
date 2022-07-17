import React from "react";

const Pagination = ({ PostsPerPage, TotalPosts, Paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(TotalPosts / PostsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => Paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
