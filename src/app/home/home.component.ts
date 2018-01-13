import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Country } from "../model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: Array<Country>;
  constructor(protected countryService: CountryService) { }

  ngOnInit() {
    this.getCountry(1, 20);
  }

  async getCountry(page, pageSize){
    var result = await this.countryService.getCountry(page, pageSize).toPromise();
    this.countries = result.items;
  }

}
