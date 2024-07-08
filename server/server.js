import express from "express";
import cors from "cors";
import records from "./routes/record.js";
const http = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 5050;
const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "/record",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  },
});

app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
