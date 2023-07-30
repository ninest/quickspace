import { FormEvent, useState } from "react";
import { emitEvent } from "./socket";

export function CreateSpacePage() {
  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emitEvent({ name: "create-space", data: { name } });
  };

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
