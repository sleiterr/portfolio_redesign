import PaginationDot from "../Pagination/PaginationDot";

const PortfolioPagination = ({ currentPage, totalPage, onPageChange }) => {
  if (totalPage <= 1) return null;

  return (
    <div className="mt-16 flex justify-center gap-1.5 md:gap-2">
      {Array.from({ length: totalPage }).map((_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <PaginationDot
            key={page}
            page={page}
            isActive={isActive}
            onClick={onPageChange}
          />
        );
      })}
    </div>
  );
};

export default PortfolioPagination;
