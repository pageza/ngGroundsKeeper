import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkordersService {
  private API_URL = '//localhost:6789/api/workorders/'
  public workOrderCount = 0
  constructor(
    private _http: HttpClient
  ) { }
  getWorkOrderCountService(id: any) {
    return this._http.get(this.API_URL + 'count/' + id)
  }
  getWorkOrdersForSchool(name: string) {
    return this._http.get( this.API_URL + 'location/'+ name)
  }
}
