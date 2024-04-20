import { Card, CardBody, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const CharacterSkeleton = () => {
  return (
    <Card>
      <Skeleton className="w-48 h-48" />
      <CardBody>
        <CardHeader>
          <Skeleton className="h-[30px] w-[150px]" />
          <Skeleton className="h-[20px] w-[150px] mt-[6px]" />
        </CardHeader>
        <CardContent>
          <div className="flex gap-6">
            <div>
              <Skeleton className="h-[24px] w-[150px]" />
              <Skeleton className="h-[24px] w-[150px] mt-[6px]" />
            </div>
            <div>
              <Skeleton className="h-[24px] w-[150px]" />
              <Skeleton className="h-[24px] w-[150px] mt-[6px]" />
            </div>
          </div>
        </CardContent>
      </CardBody>
    </Card>
  );
};
