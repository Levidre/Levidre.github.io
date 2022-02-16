import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticesPage } from '../model/notices-page.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  azuraNoticesPath = "/assets/azura-notices.json";
  zimNoticesPath = "/assets/zim-notices.json";

  constructor(private httpClient: HttpClient) { }

  getAzuraNotices() : Observable<NoticesPage>
  {
    return this.httpClient.get<NoticesPage>(this.azuraNoticesPath);
  }

  getZimNotices() : Observable<NoticesPage>
  {
    return this.httpClient.get<NoticesPage>(this.zimNoticesPath);
  }

}
