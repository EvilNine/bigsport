import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { environments } from "src/app/environments/environments";
import {IData} from "../models/news";
import {Observable} from "rxjs";
import {CacheService} from "../services/cache.service";
import { CachedRequest } from "./cache-decorator"

const apiKey = environments.apiKey
const apiUrl = environments.apiUrl

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
    private readonly cache: CacheService
  ) { }

  @CachedRequest(function () { return this.cache })
  getData(url: string, pageSize: number = 8): Observable<IData> {
    return this.http.get<IData>(`../../assets/data/${url}.json`, {
      params: new HttpParams({
        fromObject: { pageSize }
      }),
      responseType: "json"
    })
  }
  // getData(url: string, pageSize: number = 8): Observable<IData> {
  //   return this.http.get<IData>(`${apiUrl}/${url}&apiKey=${apiKey}`, {
  //     params: new HttpParams({
  //       fromObject: { pageSize }
  //     })
  //   })
  // }

}
