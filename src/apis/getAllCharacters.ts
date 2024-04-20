export interface GetAllCharactersRes {
  info: IInfo;
  results: ICharacter[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

type GetAllCharactersFn = ({
  currentPage,
}: {
  currentPage: number;
}) => Promise<GetAllCharactersRes>;

export const getAllCharacters: GetAllCharactersFn = async ({ currentPage }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${currentPage}`
  );
  return res.json();
};
