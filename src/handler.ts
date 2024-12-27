import { Request, Response } from "express";

export const notFoundHandler = (req: Request, res: Response) => {
  res.sendStatus(404);
};

export const newUrlHandler = (req: Request, res: Response) => {
  const message = req.params.message ?? "(No Message)";
  res.send(`Hello, ${message}`);
};

export const defaultHandler = (req: Request, res: Response) => {
  if (req.query.keyword) {
    res.send(`Hello, ${req.query.keyword}`);
  } else {
    res.send(`Hello, ${req.protocol.toUpperCase()}`);
  }
};
