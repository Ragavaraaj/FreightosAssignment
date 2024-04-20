import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationWrapper,
} from "./ui/pagination";

interface IProps {
  totalPages?: number;
  currentPage: number;
  handlePageChange: (x: number) => void;
}

export const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
}: IProps) => {
  const pageCalculator = (page: number) => {
    if (Math.floor(currentPage / 5) === 0) {
      return page + 1;
    } else {
      return page - 1 + Math.floor(currentPage / 5) * 5;
    }
  };

  if (!totalPages) {
    return <></>;
  }

  return (
    <PaginationWrapper>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        {currentPage >= 5 && (
          <>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  handlePageChange(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {Array.from({ length: 7 }, (_, i) =>
          pageCalculator(i) < totalPages + 1 ? (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={currentPage === pageCalculator(i)}
                onClick={() => {
                  handlePageChange(pageCalculator(i));
                }}
              >
                {pageCalculator(i)}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <></>
          )
        )}
        {currentPage < totalPages - 5 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  handlePageChange(totalPages);
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              totalPages > currentPage && handlePageChange(currentPage + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationWrapper>
  );
};
