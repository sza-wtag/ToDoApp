import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {
  showSplash = true;
  showAddTask = false;
  taskEditable = false;
}
