import { Component } from '@angular/core';
import { accordionData } from 'src/mock/accordion-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accordion';
  mockItems = accordionData;

}
