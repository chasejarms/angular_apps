import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    return this.http.put('https://angular-test-backend.firebaseio.com/data.json', servers);
  }

  getServers() {
    return this.http.get('https://angular-test-backend.firebaseio.com/');
  }
}
