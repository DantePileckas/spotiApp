import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}   from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("SpotifyService listo")
   }

   getNewReleases() {

   const headers = new HttpHeaders({
   'Authorization': 'Bearer BQCwPZqRVTsl1YwE5chtyVb3N5bULRTC_dX-P0YTke145_K_wGXm2XQ3GBtrdjTZ6FEZaaSMlcp09mpcq1M'
   })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});

     
   }


}
