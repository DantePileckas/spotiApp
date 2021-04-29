import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}   from '@angular/common/http';
import {map} from 'rxjs/operators'; //Operador. 

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("SpotifyService listo")
   }
   //para optimizar la información. Código exlusivamente único para NewReleases y Artists.
   getQuery(query:string){
     const url=`https://api.spotify.com/v1/${query}`;  //centralizar y unificar toda la petición

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBhDIprgGkW3r5jgQDPI1IXumNM4qHsuvXA6D3O-Ttia--Qva9PeMWXIh9-Lcw_8LUOG18qgVoNJRD1za0'
      });
      
      return this.http.get(url, {headers});
   }

   getNewReleases() {

  return this.getQuery('browse/new-releases?limit=20') //Voy a mandar la unica para diferente que es lo que pido que me devuelva
  .pipe( map( data => data['albums'].items)); //Es importante que pase por ese operador para que me filtre solamente los albumnes
     
   }

   getArtista (termino:string) {
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data=>data['artists'].items));
    
    
   }


}
