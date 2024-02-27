export interface DataSource<T, D, I> {
  // Model,DTO,typeof id
  create(t: T): Promise<D>;
  getAll(): Promise<D[]>;
  getOne(id: I): Promise<D | null>;
  deleteOne(id: I): Promise<void>;
  updateOne(id: I, t: T): Promise<D | null>;
}
