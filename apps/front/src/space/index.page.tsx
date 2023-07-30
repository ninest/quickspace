import { useParams } from "react-router-dom";
import { useSocketData } from "../socket";

export function SpacePage() {
  const { spaceId } = useParams();
  const { data, isLoading } = useSocketData("get-space", { spaceId: spaceId! }, "return-space");

  return (
    <>
      <h1>Space {spaceId}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
