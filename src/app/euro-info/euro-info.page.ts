import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-euro-info',
  templateUrl: './euro-info.page.html',
  styleUrls: ['./euro-info.page.scss'],
})
export class EuroInfoPage {

  public ListEuro: any = [];

  constructor(private apiService: ApiService) {
    this.buscaEuro();
  }


  public buscaEuro() {
    this.apiService.buscaEuro().subscribe(dados => {
      this.ListEuro = dados["EURBRL"];
      console.log("Lista:", this.ListEuro);

    })
  }


}
