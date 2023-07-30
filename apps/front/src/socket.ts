import { io } from "socket.io-client";
import { ClientEmittedEvent, ServerEmittedEvent } from "@packages/events";
import { useEffect, useState } from "react";

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

export function useSocketData<CName extends ClientEmittedEvent["name"], SName extends ServerEmittedEvent["name"]>(
  getEventName: CName,
  params: Extract<ServerEmittedEvent, { name: CName }>["data"],
  returnEventName: SName
) {
  type Data = Extract<ServerEmittedEvent, { name: SName }>["data"];

  const [data, setData] = useState<null | Data>(null);
  const doSomething = (receivedData: Data) => {
    setData(receivedData);
  };

  socket.emit(getEventName, params);
  useSocketOn(returnEventName, doSomething);

  return { data, isLoading: !!data };
}
