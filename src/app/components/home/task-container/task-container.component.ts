import { Component, OnInit} from '@angular/core';
import { faTrash, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})

export class TaskContainerComponent implements OnInit {
  faDelete = faTrash;
  faDone = faCheck;
  faEdit = faPen;
  tasks : Task[] = [];
  editableTaskId: number;

  constructor(private _taskService: TaskService, public _utilityService: UtilityService){}

  onDeleteTask(deleteTaskId: number) {
    this._taskService.deleteTask(deleteTaskId);
  }

  onCompleteTask(completedTaskId: number) {
    this._taskService.updateTaskStatus(completedTaskId);
  }

  onEditTask(editTaskId: number) {
    this._taskService.updateTaskEditableStatus(editTaskId);
    this.editableTaskId = editTaskId;
  }

  ngOnInit(): void {
    this.tasks = this._taskService.getTasks();
  }
}
