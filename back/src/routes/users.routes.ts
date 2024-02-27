import { Router } from "express";
import UsersController from "../controller/users.controller";

const router = Router();
const usersController = new UsersController();

router.get("/", (req, res) => usersController.getAll(req, res));
router.get("/:id", (req, res) => usersController.getOne(req, res));
router.post("/", (req, res) => usersController.create(req, res));
router.delete("/:id", (req, res) => usersController.delete(req, res));

export { router as usersRouter };
