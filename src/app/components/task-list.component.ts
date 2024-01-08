import { Component } from "@angular/core";
import { Store } from '@ngxs/store';
import { ArchiveTask, PinTask } from "../state/task.state";
import { Observable } from "rxjs";

@Component({
    selector: 'app-task-list',
    template: `
    <app-pure-task-list
        [tasks]="tasks$ | async"
        (onArchiveTask)="archiveTask($event)"
        (onPinTask)="pinTask($event)"
    ></app-pure-task-list>
    `,
})
export default class TaskListComponent {
   tasks$?: Observable<any>;

   constructor(private store: Store) {
    this.tasks$ = store.select((state) => state.taskbox.tasks);
   }

   // Component method to trigger archiveTask
   archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
   }

   // Component method to trigger pinTask
   pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
   }
}