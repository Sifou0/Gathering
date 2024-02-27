import { Request, Response } from "express";
import UsersRepository from "../data/users/users.repository";
import { UserModel } from "../domain/models/UserModel";

export default class UsersController {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  getAll = (_req: Request, res: Response) => {
    const result = this.usersRepository
      .getAll()
      .then((result) => res.status(200).json(result))
      .catch((e) => res.status(422).send(e));
  };

  getOne = (req: Request, res: Response) => {
    if (typeof req.params.id !== "undefined" && !Number.isNaN(+req.params.id)) {
      const id: number = +req.params.id;
      const result = this.usersRepository
        .getOne(id)
        .then((result) => res.status(200).json(result))
        .catch((e) => res.status(404).send(e));
    } else res.status(404).json({ error: "No valid id given" });
  };

  create = (req: Request, res: Response) => {
    const user: UserModel = {
      name: req.body.name,
    };
    const result = this.usersRepository
      .create(user)
      .then((result) => res.status(201).json(result))
      .catch((e) => res.status(422).send(e));
  };

  delete = (req: Request, res: Response) => {};
}
