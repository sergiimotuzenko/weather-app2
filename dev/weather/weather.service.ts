import {Injectable} from "angular2/src/core/di/decorators";
import {WEATHER_ITEMS} from "./weather.data";
import {Http} from "angular2/src/http/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'
import {WeatherItem} from "./weather-item";
/**
 * Created by serg on 25.08.2016.
 */
@Injectable()
export class WeatherService{
    constructor(private  _http : Http){

    }
    //some ch
    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    clearWeatherItems(){
        WEATHER_ITEMS.splice(0);
    }

    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName : string): Observable<any>{
         return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=c0472a9a9e1aa920008eaedbb87709d3&units=metric')
             .map(response => response.json())
                 .catch(error => {
                     console.error(error);
                     return Observable.throw(error.json())
                 });
    }
}
