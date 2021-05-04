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
      'Authorization': 'Bearer BQD6lyAAd-ILi7I7TQpHAf_sj3BBScZLPGhYHdso8NXhug0hz_pn6IKBrvg3x0oKtoEzoPMZVTdf_dm1Lug'
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
}







