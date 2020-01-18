// https://github.com/dennysjmarquez/angular6-spotify-api-demo/blob/master/src/app/components/pipes/domseguro.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer){}

  transform(url: string): any {

    console.log(url);

    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
