import { Request, Response, NextFunction, Router } from "express";
import { StatusCodes } from "http-status-codes";

const routes = Router();

routes.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ username: "Miguel" }];
  res.status(200).json(users);
});

routes.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).json({ uuid });
  }
);

routes.post("/users", (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser);
});

routes.post(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    res.status(StatusCodes.OK).send(modifiedUser);
  }
);

routes.delete(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send(uuid);
  }
);

export default routes;
