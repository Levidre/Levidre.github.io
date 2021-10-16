import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../model/page.model';
import { Paragraphe } from '../model/paragraphe.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private httpClient: HttpClient) { }

  getAll(page : string) : Observable<Page>
  {
    return this.httpClient.get<Page>(page);
  }
}
