import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  nombre= 'Asier';
  apellido = 'Bilbao';
  mostrar = true;
  personajes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Dardevil']

  frase: any = {
    mensaje: 'Un gran poder requiere una gran resposabilidad',
    autor: 'Ben Parker'
  };

  constructor() { }

  ngOnInit() {
  }

}
