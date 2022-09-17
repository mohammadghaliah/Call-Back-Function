import { Component, VERSION } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class CallBackComponent {
  print(callBack = null) {
    callBack('ahmad');
  }
}
