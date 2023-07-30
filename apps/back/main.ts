import cors from "cors";
import express from "express";
import http from "http";
import { Server, type Socket } from "socket.io";
import { ClientEmittedEvent } from "@packages/events";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ ping: "pong" });
});

function handleEmittedEvent(socket: Socket, event: ClientEmittedEvent) {
  switch (event.name) {
    case "create-space": {
      break;
    }
    case "join-space": {
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
