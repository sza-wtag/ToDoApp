import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  faDelete = faTrash;
  faDone = faCheck;
  tasks : Task[] = [];
  editedTaskName: string ;

  constructor(private _taskService: TaskService){}

  @Input() geteditableTaskId: number

  onSaveChange() {
    this.editedTaskName = this.editedTaskName.replace(/^\s+|\s+$/gm, '').trim();
    if(this.editedTaskName) {
      this._taskService.editTask(this.geteditableTaskId, this.editedTaskName);
    }
  }

  onDone() {
    this.editedTaskName = this.editedTaskName.replace(/^\s+|\s+$/gm, '').trim();
    if(this.editedTaskName) {
      this._taskService.editAndDoneTask(this.geteditableTaskId, this.editedTaskName);
    }
  }

  onDelete() {
    this._taskService.deleteEditedTask(this.geteditableTaskId);
  }

  ngOnInit(): void {
    this.tasks = this._taskService.getTasks();
    this.editedTaskName =this._taskService.getTaskById(this.geteditableTaskId).name;
  }
}
