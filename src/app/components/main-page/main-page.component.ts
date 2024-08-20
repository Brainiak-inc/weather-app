import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header/header.component";
import {ForecastCardComponent} from "../forecast-card/forecast-card/forecast-card.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ForecastCardComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
