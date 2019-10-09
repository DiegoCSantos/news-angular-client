import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Author } from './author';



@Injectable({providedIn:'root'})
export class AuthorService{


    constructor(private httpClient:HttpClient ){}

    incluir(author:Author):Observable<Author>{
        return this.httpClient.put<Author>(environment.API+"/author",author );
    }

    listar():Observable<Author[]>{
       return this.httpClient.get<Author[]>(environment.API+"/author");
    }

    selecionar(id:number):Observable<Author>{
        return this.httpClient.get<Author>(environment.API+"/author"+id);
    }

    alterar(author:Author):Observable<Author>{
        return this.httpClient.put<Author>(environment.API+"/author",author );
    }

    remover(id:number):Observable<Author>{
        return this.httpClient.delete<Author>(environment.API+"/author"+id);
    }
}


