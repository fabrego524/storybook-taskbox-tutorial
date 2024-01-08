import { Task } from "./task.model";

export interface TaskList {
    tasks?: Task[];
    loading?: boolean;
}