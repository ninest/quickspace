import { useParams } from "react-router-dom";

export function SpacePage() {
  const { spaceId } = useParams();

  return <>Space {spaceId}</>;
}
