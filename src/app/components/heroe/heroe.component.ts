import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Heroe, HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  constructor(private activeRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
    this.activeRoute.params.subscribe(params => {
      console.log(params.id);
      this.heroe = this._heroesService.getHeroe(params.id);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
