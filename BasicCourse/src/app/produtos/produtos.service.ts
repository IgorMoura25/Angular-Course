import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

// This class can be injectable by DI
@Injectable()
export class ProdutoService {

    constructor(private httpClient: HttpClient) { }

    protected UrlServiceV1: string = "http://localhost:3000/"

    // Observable is like a promise async
    obterProdutos(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(this.UrlServiceV1 + "produtos");
    };
}