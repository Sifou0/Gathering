export interface ToDoDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string | null;
  isCompleted: boolean;
  creatorId: number;
}
