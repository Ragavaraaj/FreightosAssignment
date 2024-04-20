import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../apis/getAllCharacters";
import { Pagination } from "../components/Pagination";
import { useState } from "react";
import { CharacterList } from "../components/CharacterList";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["all-charters", currentPage],
    queryFn: () => getAllCharacters({ currentPage }),
  });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (isError) {
    console.error(error);
  }

  return (
    <div className="p-4">
      <h1 className="mb-8 text-5xl font-bold">The Rick and Morty Characters</h1>
      <CharacterList
        loading={isPending}
        error={isError}
        characters={data?.results}
      />
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={data?.info.pages}
      />
    </div>
  );
};
