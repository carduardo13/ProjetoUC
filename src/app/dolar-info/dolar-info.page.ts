import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dolar-info',
  templateUrl: './dolar-info.page.html',
  styleUrls: ['./dolar-info.page.scss'],
})
export class DolarInfoPage {
  public ListUsd: any = [];

  constructor(private apiService: ApiService) {
    this.buscaUsd();
  }

  public buscaUsd() {
    this.apiService.buscaUsd().subscribe(dados => {
      this.ListUsd = dados["USDBRL"];
      console.log("Lista:", this.ListUsd);

    })
  }

}
