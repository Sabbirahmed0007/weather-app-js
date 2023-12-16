// 754f46f567ced3ef6727c2841de24257
const apiKey= '754f46f567ced3ef6727c2841de24257';
const apiUrl= 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka';

async function checkWeather(){
    const response = await fetch(`${apiUrl}&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
};
checkWeather();





















