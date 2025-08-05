// const API_KEY = '3cc1b3f44b9bbe2846cfe75f05294f12';
const API_KEY = '3cc1b3f44b9bbe2846cfe75f05294f12'; // <-- Replace with your real API key
const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;

    weatherResult.textContent = 'Loading...';

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );
        if (!res.ok) throw new Error('City not found');
        const data = await res.json();

        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
            <p>🌡️ Temp: ${data.main.temp}°C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬️ Wind: ${data.wind.speed} m/s</p>
        `;
    } catch (err) {
        weatherResult.textContent = 'City not found or error fetching data.';
    }
});