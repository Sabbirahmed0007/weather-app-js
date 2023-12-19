// 754f46f567ced3ef6727c2841de24257
const apiKey = '754f46f567ced3ef6727c2841de24257';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search');
const weatherIcon= document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    if(response.status === 404){
        document.querySelector('.error').style.display= 'block';
        document.querySelector('.weather').style.display= 'none';
    }
    else{

        var data = await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/p';
    
        if(data.weather[0].main === 'Clouds'){
            weatherIcon.src = './images/clouds.png';
        }
        else if(data.weather[0].main === 'Clear'){
            weatherIcon.src= './images/clear.png';
        }
        else if(data.weather[0].main === 'Rain'){
            weatherIcon.src = './images/rain.png';
        }
        else if(data.weather[0].main === 'Drizzle'){
            weatherIcon.src = './images/drizzle.png';
        }
        else if(data.weather[0].main === 'Mist'){
            weatherIcon.src = './images/mist.png';
        }
        else if(data.weather[0].main === 'haze'){
            weatherIcon.src = './images/snow.png';
        }
    }
    

};




searchButton.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
} )


// checkWeather () ;


// async function checkWeather () {
//     const response = await fetch(`${apiUrl}&appid=${apiKey}`);
//     var data= await response.json();
// //     const input = document.querySelector('.search-bar') ; 
// //     const inputValueString = input.value;
// //     const cityName = document.querySelector('.city') ; 
// //     const temperature = document.querySelector('.temp') ; 
// //     cityName.innerText = inputValueString ;
//         console.log(data);
//         const city = document.querySelector('.city')
//         city.innerText= data.name;
//         document.querySelector('.temp').innerText=Math.round( data.main.temp);
//         document.querySelector('.humidity').innerText= data.main.humidity;
//         document.querySelector('.wind').innerText= data.wind.speed;
// };



















