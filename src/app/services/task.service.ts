import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
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

  // page = 1 _start = 0
  // page = 2 _start = 5

  getTasks(page: number) : Observable<Task[]> {
    const params = new HttpParams({
      fromObject: {
        _start: 0,
        _limit: 15 * page
      }
    });
    return this._httpClient.get<Task[]>(this.taskUrl, {params});
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
