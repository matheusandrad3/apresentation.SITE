import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod'
import { HttpClient } from '@angular/common/http';
import { Message } from './models/message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private API_URL = environment.API_URL + '/message';

  constructor(private httpClient: HttpClient) {}

  sendEmail(message: Message): Observable<any> {
    return this.httpClient.post(this.API_URL, message);
  }
}
