import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  public schools = []

  constructor(
    private _http: HttpClient,
  ) { }
  getSchoolsService() {
    return this._http.get('//localhost:6789/api/schools')
  }
  getSchoolInfoService(name: string) {
    return this._http.get('//localhost:6789/api/schools/info/' + name)
  }
}
