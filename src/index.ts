import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: "bar" });
});

const port = 8089;
app.listen(port, () => {
  console.log(`==> Running on port:.. ${port}`);
});
