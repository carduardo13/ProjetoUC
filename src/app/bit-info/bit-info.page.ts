import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bit-info',
  templateUrl: './bit-info.page.html',
  styleUrls: ['./bit-info.page.scss'],
})
export class BitInfoPage {
  public ListBit: any = [];
  constructor(private apiService: ApiService) {
    this.buscaBit()
  }

  public buscaBit() {
    this.apiService.buscaBit().subscribe(dados => {
      this.ListBit = dados["BTCBRL"];
      console.log("Lista:", this.ListBit);

    })
  }


}
