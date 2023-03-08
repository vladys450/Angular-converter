import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

interface ExchangeRates {
  [key: string]: number;
  USD: number;
  EUR: number;
}

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  title = 'currency-converter';
  exchangeRates: ExchangeRates = { USD: 0, EUR: 0 };
  currencies: string[] = [];
  fromCurrency = 'USD';
  toCurrency = 'EUR';
  fromValue = 1;
  toValue = 0;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getExchangeRates().then(exchangeRates => {
      this.exchangeRates = exchangeRates;
      this.currencies = ['UAH', 'USD', 'EUR'];
      this.convert('fromValue');
    });
  }

  convert(inputType: string): void {
    let fromRate = 1, toRate = 1;
    if (this.fromCurrency !== 'UAH') {
      +(fromRate = this.exchangeRates[this.fromCurrency]).toFixed(2);
    }
    if (this.toCurrency !== 'UAH') {
      toRate = +(this.exchangeRates[this.toCurrency]).toFixed(2);
    }

    if (inputType === 'fromValue') {
      this.toValue = +(this.fromValue * fromRate / toRate).toFixed(2);
    } else if (inputType === 'toValue') {
      this.fromValue = +(this.toValue * toRate / fromRate).toFixed(2);
    }
  }
}


