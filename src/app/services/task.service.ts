import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Task } from "../models/task.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly taskUrl: string = 'http://localhost:3000/tasks';

  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  getTasks() : Observable<Task[]> {
    return this._httpClient.get<Task[]>(this.taskUrl);
  }

  addTask(task : Task) : Observable<Task> {
    return this._httpClient.post<Task>(this.taskUrl, task);
  }

  deleteTask(id: string) : Observable<Task> {
    return this._httpClient.delete<Task>(this.taskUrl + '/' + id);
  }

  updateTask(id: string, task : Task) : Observable<Task> {
    return this._httpClient.put<Task>(this.taskUrl + '/' + id, task);
  }
}
