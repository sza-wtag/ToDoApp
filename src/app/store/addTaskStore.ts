import { Injectable } from "@angular/core";
import { Store } from "./store";

@Injectable({providedIn: 'root'})
export class AddTaskStore extends Store<boolean> {
    constructor(){
      super(false)
    }

    updateAddTaskSate(status: boolean): void {
        this.setState(status)
    }
}
