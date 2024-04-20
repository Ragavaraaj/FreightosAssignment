import { ICharacter } from "../apis/getAllCharacters";
import { Character } from "./Character";
import { CharacterSkeleton } from "./CharacterSkeleton";

interface IProps {
  loading: boolean;
  error: boolean;
  characters?: ICharacter[];
}

export const CharacterList = ({ characters, error, loading }: IProps) => {
  if (loading) {
    return (
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 20 }, (_, i) => (
          <CharacterSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <span>Error</span>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {characters?.map((character) => (
        <Character {...character} />
      ))}
    </div>
  );
};
