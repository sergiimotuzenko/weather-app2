import {Component} from "angular2/core";
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "./weather-item";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {WeatherService} from "./weather.service";
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <weather-item *ngFor="#wItem of weatherItems" [item] = "wItem"></weather-item>
        </section>
    `,
    directives: [WeatherItemComponent]
})
export class WeatherListComponent implements OnInit{
    weatherItems:WeatherItem[];
    constructor(private _weatherService: WeatherService){}

      ngOnInit(): any {
          this.weatherItems =  this._weatherService.getWeatherItems();
    }

}