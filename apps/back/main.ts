import cors from "cors";
import express from "express";
import http from "http";
import { Server, type Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ ping: "pong" });
});

io.on("connection", (socket) => {
  socket.on("hello", (data: any) => {
    console.log("hello! ", data);
    socket.emit("bye", { two: 2 });
  });

  socket.on("create-space", (data: any) => {
    console.log(data);
  });

  socket.on("join-space", (data: any) => {
    console.log(data);
  });
});

server.listen(8000, () => {
  console.log("Listening on http://localhost:800");
});
