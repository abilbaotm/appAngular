import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
interface Artistas {
  artists: {items: []};
}


@Injectable({
  providedIn: 'root'
})


export class SpotifyService {
  artistas: [];
  urlSpotify = 'https://api.spotify.com/v1';
  token = 'BQD5kw7Bijr5zZ0Vqr728meTNL3EgSZFhjpkE_xgu0vo-W55zlV1pfNktIvZx_XfdycmNLHe6kow7aNNNjE';

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify Listo');
  }

  getArtistas(termino: string) {
    console.log('a por artistas');
    const url = `${this.urlSpotify}/search?query=${termino}&type=artist&market=US&limit=20`;
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + this.token
    });

    return this.http.get(url, {headers}).pipe(
        map((resp: Artistas)  => {
          console.log(resp);
          return resp.artists.items;
        })
    );


  }
  getArtista(id: string) {
    const url = `${this.urlSpotify}/artists/${id}`;
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + this.token
    });

    return this.http.get(url, {headers}).pipe(
        map((resp: Artistas)  => {
          return resp;
        })
    );

  }
  getTop(id: string) {
    const url = `${this.urlSpotify}/artists/${id}/top-tracks?country=US`;
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + this.token
    });

    return this.http.get(url, {headers}).pipe(
        map((resp: Artistas)  => {
          return resp;
        })
    );
  }
}
