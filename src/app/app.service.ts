import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ExchangeRates {
  [key: string]: number;
  USD: number;
  EUR: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  async getExchangeRates(): Promise<ExchangeRates> {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    try {
      const response = await this.http.get(url).toPromise();
      const currencies = response ? response as { cc: string; rate: number; }[] : [];
      const exchangeRates: ExchangeRates = currencies.reduce((rates, currency) => {
        if (currency.cc === 'USD' || currency.cc === 'EUR') {
          rates[currency.cc] = currency.rate;
        }
        return rates;
      }, { USD: 0, EUR: 0 });
      return exchangeRates;
    } catch (error) {
      console.error(error);
      return { USD: 0, EUR: 0 };
    }
  }
}