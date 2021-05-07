import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}   from '@angular/common/http';
import {map} from 'rxjs/operators'; //Operador. 

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    private token: any;

  constructor(private http:HttpClient) {
    this.getToken()
    .subscribe(resp => {
      this.token = resp;
    });  
   }
   //para optimizar la información. Código exlusivamente único para NewReleases y Artists.
   getQuery(query:string){
     const url=`https://api.spotify.com/v1/${query}`;  //centralizar y unificar toda la petición

     const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token.access_token}`
      // 'Authorization': 'Bearer BQDpt-G-Vlpto7CkGmSmgrOL4gzQQhPTnoOAOEhpq_Zju06taUpQinBfJhhXyhqS1y3TCrABupU1ub8Cq2U'

      });
      
      return this.http.get(url, {headers});
   }

   getNewReleases() {

  return this.getQuery('browse/new-releases?limit=20') //Voy a mandar la unica para diferente que es lo que pido que me devuelva
  .pipe( map( data => data['albums'].items)); //Es importante que pase por ese operador para que me filtre solamente los albumnes
     
   }

   getArtistas (termino:string) {
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data=>data['artists'].items));
   }

   getArtista (id:string) {
    
    return this.getQuery(`artists/${ id }`);
    // .pipe(map(data=>data['artists'].items));
   }

   getTopTracks(id:string) {
    
    return this.getQuery(`artists/${id}/top-tracks?market=es`) 
    .pipe(map(data=>data['tracks']));
  }
  getToken(): any {
    return this.http.get(`https://spotify-ar-api.herokuapp.com/spotify/49c58326fd8e4b62a56efd9732327ada/1ac83de3b84f4d828845bdda1743d561`);
  }
}







