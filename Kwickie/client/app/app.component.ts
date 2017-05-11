import { Component } from '@angular/core';
import { KwickieService } from './services/kwickie.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ KwickieService ]
})
export class AppComponent { }