import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'https://economia.awesomeapi.com.br/last/'

  constructor(private http: HttpClient) { }


  buscaUsd() {
    return this.http.get(`${this.url}USD-BRL`);
  }

  buscaEuro() {
    return this.http.get(`${this.url}EUR-BRL`);
  }

  buscaBit() {
    return this.http.get(`${this.url}BTC-BRL`);
  }
}
