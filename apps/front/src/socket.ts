import { io } from "socket.io-client";
import { ClientEmittedEvent } from "@packages/events";

const SERVER = import.meta.env.MODE === "production" ? "TODO" : "http://localhost:8000";

export const socket = io(SERVER, { transports: ["websocket"] });

export function emitEvent(event: ClientEmittedEvent) {
  socket.emit(event.name, event.data);
}
