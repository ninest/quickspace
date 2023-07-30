import { Space } from "./types";

export type ClientEmittedEvent =
  | { name: "create-space"; data: { name: string } }
  | { name: "join-space"; data: { spaceId: string; userId: string } }
  | { name: "get-space"; data: { spaceId: string } };

export type ServerEmittedEvent =
  | { name: "test"; data: { test: string } }
  | { name: "redirect-to-new-space"; data: { spaceId: string } }
  | { name: "return-space"; data: { space: Space } };
