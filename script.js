// const API_KEY = '3cc1b3f44b9bbe2846cfe75f05294f12';
const API_KEY = '3cc1b3f44b9bbe2846cfe75f05294f12'; // <-- Replace with your real API key
const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const extraDetails = document.getElementById('extraDetails');
const forecastDiv = document.getElementById('forecast');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;

    weatherResult.textContent = 'Loading...';
    extraDetails.innerHTML = '';
    forecastDiv.innerHTML = '';

    try {
        // Current weather
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );
        if (!res.ok) throw new Error('City not found');
        const data = await res.json();

        // Weather icon
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <img src="${iconUrl}" alt="${data.weather[0].description}" style="width:80px;height:80px;">
            <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
            <p>🌡️ Temp: ${data.main.temp}°C</p>
        `;

        // Extra details
        extraDetails.innerHTML = `
            <p>🤗 Feels like: ${data.main.feels_like}°C</p>
            <p>🔽 Pressure: ${data.main.pressure} hPa</p>
            <p>🌅 Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>🌇 Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬️ Wind: ${data.wind.speed} m/s</p>
        `;

        // 5-day forecast
        const forecastRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );
        if (forecastRes.ok) {
            const forecastData = await forecastRes.json();
            // Group by day
            const days = {};
            forecastData.list.forEach(item => {
                const date = item.dt_txt.split(' ')[0];
                if (!days[date]) days[date] = [];
                days[date].push(item);
            });
            // Show next 5 days
            let forecastHtml = '<h3>5-Day Forecast</h3><div class="forecast-grid">';
            Object.keys(days).slice(0, 5).forEach(date => {
                const dayData = days[date][0];
                const icon = dayData.weather[0].icon;
                forecastHtml += `
                    <div class="forecast-day">
                        <div>${new Date(date).toLocaleDateString()}</div>
                        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="" width="50">
                        <div>${dayData.weather[0].main}</div>
                        <div>${dayData.main.temp}°C</div>
                    </div>
                `;
            });
            forecastHtml += '</div>';
            forecastDiv.innerHTML = forecastHtml;
        }
    } catch (err) {
        weatherResult.textContent = 'City not found or error fetching data.';
        extraDetails.innerHTML = '';
        forecastDiv.innerHTML = '';
    }
});