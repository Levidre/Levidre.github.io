import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notices } from '../model/notices.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  noticesPath = "/assets/notices.json";

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Notices>
  {
    return this.httpClient.get<Notices>(this.noticesPath);
  }

}
