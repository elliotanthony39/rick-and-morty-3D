import React from "react";

function NavPage({ page, setPage, usPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center mt-2 mb-2">
      {page !== 1 ? (
        <button
          className="btn btn-success btn-sm"
          onClick={() => setPage(page - 1)}
        >
          Page {page - 1}
        </button>
      ) : (
        <button className="btn btn-success btn-sm" disabled>
          Page 0
        </button>
      )}

      {page !== usPage ? (
        <button
          className="btn btn-success btn-sm"
          onClick={() => setPage(page + 1)}
        >
          Page {page + 1}
        </button>
      ) : (
        <button className="btn btn-success btn-sm" disabled>
          Page {page + 1}
        </button>
      )}
    </header>
  );
}

export default NavPage;
