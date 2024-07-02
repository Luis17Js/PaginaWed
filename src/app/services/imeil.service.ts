

import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Observable} from 'rxjs';
import { enviroments } from 'src/environments/enviroments';
import { ResponseApi } from '../interfaces/response-api';
import { contacto } from '../interfaces/contacto';

@Injectable({
    providedIn: 'root'
  })
  export class imeilservicio {
  
    private urlApi:string= enviroments.endpoint+ "Email";
  
    constructor(private http:HttpClient) { }
    
  correo(request:contacto):Observable<ResponseApi>{

    return this.http.post<ResponseApi>(`${this.urlApi}`, request)
 }
  }