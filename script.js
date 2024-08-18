// script.js

// Your API key from OpenWeatherMap or any other weather service
const apiKey = 'YOUR_API_KEY';

// Function to get weather based on user input
function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location.');
    }
}

// Function to fetch weather data based on location
function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => alert('Error fetching weather data: ' + error));
}

// Function to display weather data
function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    if (data.cod === 200) {
        weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
    } else {
        weatherInfo.innerHTML = `<p>Location not found. Please try again.</p>`;
    }
}

