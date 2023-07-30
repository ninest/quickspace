import cors from "cors";
import express from "express";
import http from "http";
import { Server, type Socket } from "socket.io";
import { ClientEmittedEvent, ServerEmittedEvent } from "@packages/events";
import { createSpace, getSpaceById } from "./store";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ ping: "pong" });
});

function emitEvent(socket: Socket, event: ServerEmittedEvent) {
  socket.emit(event.name, event.data);
}

function handleEmittedEvent(socket: Socket, event: ClientEmittedEvent) {
  switch (event.name) {
    case "create-space": {
      const { name } = event.data;
      const newSpace = createSpace(name);
      emitEvent(socket, { name: "redirect-to-new-space", data: { spaceId: newSpace.id } });
      break;
    }
    case "join-space": {
      break;
    }
    case "get-space": {
      const { spaceId } = event.data;
      const space = getSpaceById(spaceId);
      if (!space) throw new Error(`Space ID ${spaceId} not found`);

      emitEvent(socket, { name: "return-space", data: { space } });
      break;
    }
    default: {
      console.error(`Invalid event from client: ${event}`);
    }
  }
}

io.on("connection", (socket) => {
  socket.onAny((name, data) => {
    handleEmittedEvent(socket, { name, data });
  });
});

server.listen(8000, () => {
  console.log("Listening on http://localhost:800");
});
