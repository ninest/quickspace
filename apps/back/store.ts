import { slugify } from "./utils";
import cuid from "cuid";
import { Space, User } from "@packages/events/types";

export const spaces: Space[] = [];

export function getSpaceById(spaceId: string) {
  return spaces.find((space) => space.id === spaceId);
}

export function createSpace(name: string) {
  const space: Space = {
    id: `${slugify(name)}-${cuid.slug()}`,
    name: "",
    users: [],
  };
  spaces.push(space);
  return space;
}
