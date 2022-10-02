import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  // Injecting via DI the class in the constructor
  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe( // subscribing to the Observable return event
        {
          next: produtos => { // It's like a ".then()" of ajax
            this.produtos = produtos;
            console.log(produtos);
          },
          error: error => console.log(error) // It's like a ".catch()" of ajax
        }
      )
  }

}
