// 754f46f567ced3ef6727c2841de24257
const apiKey = '754f46f567ced3ef6727c2841de24257';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox = document.querySelector('.search-bar')
const searchButton = document.querySelector('.search')


async function checkWeather(city){
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/p';
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



















