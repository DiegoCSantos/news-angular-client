import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Comment } from './comment';


@Injectable({providedIn:'root'})
export class CategoryService{


    constructor(private httpClient:HttpClient ){}

    incluir(category:Comment):Observable<Comment>{
        return this.httpClient.post<Comment>(environment.API+"/comment",category );
    }

    listar():Observable<Comment[]>{
       return this.httpClient.get<Comment[]>(environment.API+"/comment");
    }

    selecionar(id:number):Observable<Comment>{
        return this.httpClient.get<Comment>(environment.API+"/comment"+id);
    }

    alterar(category:Comment):Observable<Comment>{
        return this.httpClient.put<Comment>(environment.API+"/comment",category );
    }

    remover(id:number):Observable<Comment>{
        return this.httpClient.delete<Comment>(environment.API+"/comment"+id);
    }
}