import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  public ListUsd: any = [];
  public ListEuro: any = []
  public ListBit: any = []

  constructor(private apiService: ApiService) {
    this.buscaUsd();

    this.buscaEuro();

    this.buscaBit();
  }

  public buscaUsd() {
    this.apiService.buscaUsd().subscribe(dados => {
      this.ListUsd = dados["USDBRL"];
      console.log("Lista:", this.ListUsd);

    })
  }

  public buscaEuro() {
    this.apiService.buscaEuro().subscribe(dados => {
      this.ListEuro = dados["EURBRL"];
      console.log("Lista:", this.ListEuro);

    })
  }


  public buscaBit() {
    this.apiService.buscaBit().subscribe(dados => {
      this.ListBit = dados["BTCBRL"];
      console.log("Lista:", this.ListBit);

    })
  }



}
