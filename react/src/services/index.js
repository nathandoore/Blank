import axios from 'axios';
import {setList} from '../store/weather/actions';

/**
 * @description fetching weather from a free API and sending to action
 */
export async function getWeather(){
    const data = await axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
    setList(data.data.dataseries);
    return;
}