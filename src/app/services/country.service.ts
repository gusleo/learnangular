import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "./config";
import { Observable } from "rxjs/Observable"
import { Pagination } from '../model/pagination';
import { Country } from '../model/index';

@Injectable()
export class CountryService {

  constructor(private http:HttpClient) { }

 getCountry(pageIndex:number = 1, pageSize:number = 20):Observable<Pagination<Country>>{

    var result = this.http.get<Pagination<Country>>(BASE_URL + "geolocation/country/" + pageIndex + "/" + pageSize);
    return result;
  }

}
