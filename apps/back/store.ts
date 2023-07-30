import { slugify } from "./utils";
import cuid from "cuid";

interface Space {
  id: string;
  name: string;
  users: User[];
}

interface User {
  id: string;
  name: string;
}

export const spaces: Space[] = [];

export function createSpace(name: string) {
  const space: Space = {
    id: `${slugify(name)}-${cuid.slug()}`,
    name: "",
    users: [],
  };
  spaces.push(space);
  return space;
}
