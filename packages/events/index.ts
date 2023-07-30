export type ClientEmittedEvent =
  | { name: "create-space"; data: { name: string } }
  | { name: "join-space"; data: { spaceId: string; userId: string } };

export type ServerEmittedEvent =
  | { name: "test"; data: { test: string } }
  | { name: "redirect-to-new-space"; data: { spaceId: string } };
