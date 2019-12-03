import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NumbersApiInterface } from "../interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private apiUrl = "http://numbersapi.com/";

  constructor(private http: HttpClient) {}
  public getNumber(peselNumber): Observable<NumbersApiInterface[]> {
    return this.http.get<NumbersApiInterface[]>(
      `${this.apiUrl}${peselNumber}?json`
    );
  }
}
