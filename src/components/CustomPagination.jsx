import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const updatePage = (page) => {
    if (page < 1 || page > totalPages) return;

    // Update URL query parameters
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page);
    navigate(`?${searchParams.toString()}`, { replace: true });

    // Update the current page state
    setCurrentPage(page);

    // Fetch new data based on the page number
    // You can trigger a data fetch here if needed
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      updatePage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  const pages = [];
  for (
    let i = Math.max(1, currentPage - 1);
    i <= Math.min(currentPage + 1, totalPages);
    i++
  ) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {currentPage > 1 && <button onClick={goToPreviousPage}>&lt;&lt;</button>}

      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => updatePage(page)}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button onClick={goToNextPage}>&gt;&gt;</button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
};

export default Pagination;
