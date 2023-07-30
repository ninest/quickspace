import { io } from "socket.io-client";
import { ClientEmittedEvent, ServerEmittedEvent } from "@packages/events";
import { useEffect } from "react";

const SERVER = import.meta.env.MODE === "production" ? "TODO" : "http://localhost:8000";

export const socket = io(SERVER, { transports: ["websocket"] });

export function emitEvent(event: ClientEmittedEvent) {
  socket.emit(event.name, event.data);
}

export function useSocketOn<T extends ServerEmittedEvent["name"]>(
  eventName: T,
  fn: (data: Extract<ServerEmittedEvent, { name: T }>["data"]) => void
) {
  useEffect(() => {
    // TODO
    socket.on(eventName, fn as any);
    return () => {
      socket.off(eventName, fn as any);
    };
  }, []);
}
