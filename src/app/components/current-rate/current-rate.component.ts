import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

interface ExchangeRates {
  [key: string]: number;
  USD: number;
  EUR: number;
}

@Component({
  selector: 'app-current-rate',
  templateUrl: './current-rate.component.html',
  styleUrls: ['./current-rate.component.scss']
})
export class CurrentRateComponent implements OnInit {
  exchangeRates: ExchangeRates = { USD: 0, EUR: 0 };

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getExchangeRates().then(exchangeRates => {
      this.exchangeRates = exchangeRates;
    });
  }

}