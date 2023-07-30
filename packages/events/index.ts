export type ClientEmittedEvent =
  | { name: "create-space"; data: { name: string } }
  | { name: "join-space"; data: { spaceId: string; userId: string } };
