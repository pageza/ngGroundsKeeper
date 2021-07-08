import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkordersService {
  public workOrderCount = 0
  constructor(
    private _http: HttpClient
  ) { }
  getWorkOrderCountService(id: any) {
    return this._http.get('//localhost:6789/api/workorders/count/' + id)
  }
}
