import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  nuevasCanciones: any []=[];
  loading: boolean; //una propiedad para la aparición del loading (cuando está cargando la data)

  constructor(private spotify:SpotifyService) { 

  this.loading = true; //cuando está cargando

    this.spotify.getNewReleases()
    .subscribe((data:any) =>{
    this.nuevasCanciones = data;
    this.loading=false; //cuando deja de cargar
    });
  }



}
