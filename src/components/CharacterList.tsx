import { ICharacter } from "../apis/getAllCharacters";
import { Character } from "./Character";

interface IProps {
  loading: boolean;
  error: boolean;
  characters?: ICharacter[];
}

export const CharacterList = ({ characters, error, loading }: IProps) => {
  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error</span>;
  }

  return characters?.map((character) => <Character {...character} />);
};
