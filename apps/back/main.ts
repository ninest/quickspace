import express from "express";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ ping: "pong" });
});

server.listen(8000, () => {
  console.log("Listening on http://localhost:800");
});
