import { formatDate } from "@angular/common";

export class Task{
    id = 0;
    name = '';
    status = false;
    createDate = formatDate (new Date(), 'dd.MM.YY', 'en');

    private static currentId = 0;
    constructor(){
        this.id = Task.currentId++;
    }
}
