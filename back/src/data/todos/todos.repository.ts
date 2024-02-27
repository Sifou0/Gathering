import { ToDoDto } from "../../domain/dto/ToDoDto";
import { ToDoModel } from "../../domain/models/ToDoModel";
import { DataSource } from "../data.repository";

export default class ToDoRepository
  implements DataSource<ToDoModel, ToDoDto, number>
{
  create(t: ToDoModel): Promise<ToDoDto> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<ToDoDto[]> {
    throw new Error("Method not implemented.");
  }
  getOne(id: number): Promise<ToDoDto | null> {
    throw new Error("Method not implemented.");
  }
  deleteOne(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  updateOne(id: number, t: ToDoModel): Promise<ToDoDto | null> {
    throw new Error("Method not implemented.");
  }
}
