import { Request, Response, NextFunction, Router } from "express";
import { StatusCodes } from "http-status-codes";

const routes = Router();

routes.get("/api/v1", (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.OK).send({
    success: true,
    message: "Welcome to API!",
    version: "1.0.0",
  });
});

export default routes;
