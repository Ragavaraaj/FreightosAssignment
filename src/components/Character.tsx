import { ICharacter } from "../apis/getAllCharacters";
import {
  Card,
  CardBody,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardTitle,
} from "./ui/card";

export const Character = (props: ICharacter) => {
  const statusColorSelector = (status: string) => {
    switch (status) {
      case "Alive":
        return "text-green-500";
      case "Dead":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Card>
      <CardImage src={props.image} alt={props.name} />
      <CardBody>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>
            {props.species} -{" "}
            <span className={`font-bold ${statusColorSelector(props.status)}`}>
              {props.status}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6">
            <div>
              <p className="text-base">Origin</p>
              <p className="text-base font-bold">{props.origin.name}</p>
            </div>
            <div>
              <p className="text-base">Gender</p>
              <p className="text-base font-bold">{props.gender}</p>
            </div>
          </div>
        </CardContent>
      </CardBody>
    </Card>
  );
};
