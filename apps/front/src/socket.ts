import { io } from "socket.io-client";

const SERVER = import.meta.env.MODE === "production" ? "TODO" : "http://localhost:8000";

export const socket = io(SERVER, { transports: ["websocket"] });
