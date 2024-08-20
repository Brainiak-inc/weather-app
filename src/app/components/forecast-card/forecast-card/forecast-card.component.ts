import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [],
  templateUrl: './forecast-card.component.html',
  styleUrl: './forecast-card.component.scss'
})
export class ForecastCardComponent {
 @Input() cityName: string = '';
 @Input() maxTemp: number = 0;
 @Input() minTemp: number = 0;
}
