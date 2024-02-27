export interface ToDoModel {
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string | null;
  isCompleted: boolean;
  creatorId: number;
}
