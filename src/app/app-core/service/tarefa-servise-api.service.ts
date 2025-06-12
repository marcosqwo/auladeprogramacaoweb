import { Injectable } from '@angular/core';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {Tarefa} from "../model/tarefa";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TarefaServiseApiService {

  private apiUrl: string = 'http://localhost:8080/api/tarefa';


    constructor( private http: HttpClient ) { }

  buscarTarefa(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl + '/buscar');
  }


}
