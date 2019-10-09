import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from './post';



@Injectable({providedIn:'root'})
export class PostService{


    constructor(private httpClient:HttpClient ){}

    incluir(post:Post):Observable<Post>{
        return this.httpClient.put<Post>(environment.API+"/post",post );
    }

    listar():Observable<Post[]>{
       return this.httpClient.get<Post[]>(environment.API+"/post");
    }

    selecionar(id:number):Observable<Post>{
        return this.httpClient.get<Post>(environment.API+"/post"+id);
    }

    alterar(post:Post):Observable<Post>{
        return this.httpClient.put<Post>(environment.API+"/post",post );
    }

    remover(id:number):Observable<Post>{
        return this.httpClient.delete<Post>(environment.API+"/post"+id);
    }
}


