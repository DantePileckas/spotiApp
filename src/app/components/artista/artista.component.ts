import { Component, OnInit } from '@angular/core';
// activatedRouter para saber cual es la ruta activa
import { ActivatedRoute } from '@angular/router'; 
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

artista: any={};
loadingArtist: boolean;

  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService) { 
    this.router.params.subscribe(params =>{ 
      // console.log(params['id']);
      this.loadingArtist=true;
      this.getArtista(params['id']);
    })
  }

    getArtista(id:string){
      this.loadingArtist=true;
     this.spotify.getArtista(id)
     .subscribe(artista =>{
       console.log(artista);
       this.artista=artista;
       this.loadingArtist=false;
     })
  }

}
