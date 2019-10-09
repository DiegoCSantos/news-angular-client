import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({providedIn:'root'})
export class CategoryService{


    constructor(private httpClient:HttpClient ){}

    incluir(category:Category):Observable<Category>{
        return this.httpClient.post<Category>(environment.API+"/category",category );
    }

    listar():Observable<Category[]>{
       return this.httpClient.get<Category[]>(environment.API+"/category");
    }

    selecionar(id:number):Observable<Category>{
        return this.httpClient.get<Category>(environment.API+"/category"+id);
    }

    alterar(category:Category):Observable<Category>{
        return this.httpClient.put<Category>(environment.API+"/category",category );
    }

    remover(id:number):Observable<Category>{
        return this.httpClient.delete<Category>(environment.API+"/category"+id);
    }
}