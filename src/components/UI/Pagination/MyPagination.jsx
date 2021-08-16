import React from "react";

import { getPagesArray } from "../../../utils/pages";

export const MyPagination = ({ totalPages, page, handleChangePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div>
      {pagesArray.map((p) => (
        <div className="page__wrapper">
          <span
            onClick={() => handleChangePage(p)}
            key={p}
            className={page === p ? "page page-current" : "page"}
          >
            {p}
          </span>
        </div>
      ))}
    </div>
  );
};
