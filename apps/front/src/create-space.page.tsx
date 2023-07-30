import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emitEvent, useSocketOn } from "./socket";

export function CreateSpacePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emitEvent({ name: "create-space", data: { name } });
  };

  useSocketOn("redirect-to-new-space", ({ spaceId }) => {
    navigate(`/${spaceId}`);
  });

  return (
    <>
      <main>
        <h1>Create a space</h1>
        <form onSubmit={onSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
          <button type="submit">Create</button>
        </form>
      </main>
    </>
  );
}
