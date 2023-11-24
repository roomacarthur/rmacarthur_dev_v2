import { Pagination } from "@nextui-org/pagination";
import React from "react";

export default function PagePagination() {
  const pageCount = "3";
  const currentPage = "2";
  return (
    <Pagination
      color="warning"
      initialPage={currentPage}
      total={pageCount}
      className="mt-4 sm:float-right"
    />
  );
}
