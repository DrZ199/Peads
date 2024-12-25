import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = '/api/chat';

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, { message });
  }

  getCitations(): Observable<any> {
    return this.http.get('/api/citations');
  }

  getLogs(): Observable<any> {
    return this.http.get('/api/logs');
  }
}
