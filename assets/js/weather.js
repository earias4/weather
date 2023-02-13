

import { weather_data } from './data.js';



let loadDayForecastData = () => {
    let [gye,...others]=weather_data;

    for (let prop in gye){
        let elem = document.getElementById(prop);
        if (elem!=null){
            elem.innerHTML=gye[prop]
        }
    }

    let forecast_today = gye["forecast_today"];
    

    for (let objeto of forecast_today){
        let buscar =objeto["lapse"]
        for (let clave in objeto){
            find = buscar + "_" + clave;
            console.log(find);
            let elem = document.getElementById(find);
            if (elem!=null){
                elem.innerHTML=objeto[clave]
            }
        }
    }
}




let loadWeekForecastData = () => {

    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
    });

    let prediccion =weather_data[0]["forecast_week"];

    let padre = document.getElementsByClassName("list-group")
    padre = padre[0]
    for (let dia of prediccion){
        let tmin = dia["temperature"]["min"];
        let tmax = dia["temperature"]["max"];
        
        let contenido = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${dia["text"]}</h6>
      <span class="text-xs">${dia["date"]}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${tmax}</span> |  <span class="text-dark mx-2">${tmin}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${dia["icon"]}</i></div>
    </div>
  </li>`
    padre.innerHTML += contenido;
    }
    
	
	
}


document.addEventListener("DOMContentLoaded", (event) => {
    loadDayForecastData();
    let element = document.getElementById('loadinfo');

    element.addEventListener('click', (event) => {
    loadWeekForecastData();
    });
});





