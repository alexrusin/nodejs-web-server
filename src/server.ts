import { createServer } from "http";
import express, { Express, Request, Response } from "express";
import { newUrlHandler } from "./handler";

const expressApp: Express = express();

expressApp.use(express.json());

expressApp.get("/newurl/:message?", newUrlHandler);

expressApp.post("/hello", (req: Request, res: Response) => {
  const name = req.body.name;
  res.json({ greeting: `Hello ${name}` });
});

expressApp.get("/send-ocean", (req: Request, res: Response) => {
  res.sendFile("ocean.jpg", { root: "static" });
});
expressApp.get("/download-ocean", (req: Request, res: Response) => {
  res.download("static/ocean.jpg");
});

expressApp.use(express.static("static"));
expressApp.use(express.static("node_modules/bootstrap/dist"));

const port = 3000;

const server = createServer(expressApp);

server.listen(port, () => console.log(`Server listening on port ${port}`));
