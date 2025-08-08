# wheatherApp# WeatherApp

A responsive web application that displays current weather and a 5-day forecast for any city using the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Search weather by city name
- Shows:
  - City, country, weather icon, and description
  - Current temperature, feels like, humidity, pressure, wind speed
  - Sunrise and sunset times
- 5-day forecast with icons and temperatures
- Responsive, modern UI

## Screenshots

![WeatherApp Screenshot] (image.png)
## Demo

You can run the app locally by following the steps below.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (optional, only if you want to use a local server)
- A modern web browser
- An [OpenWeatherMap API key](https://openweathermap.org/appid)

### Installation

1. **Clone or Download the Repository**

   ```
   git clone https://github.com/yourusername/wheatherApp.git
   cd wheatherApp
   ```


2. **Run the App**

   - Open `index.html` directly in your browser **OR**
   - Use a local server (recommended for some browsers):

     ```
     npx serve .
     ```
     or
     ```
     python -m http.server
     ```

## Project Structure

```
wheatherApp/
│
├── index.html        # Main HTML file
├── style.css         # Stylesheet
├── script.js         # JavaScript logic
└── README.md         # This file
```

## Usage

1. Enter a city name in the input field.
2. Click "Get Weather".
3. View current weather and 5-day forecast displayed horizontally under the input.

## Customization

- You can adjust the UI by editing `style.css`.
- To change the default city or add more weather details, modify `script.js`.

## Dependencies

- [OpenWeatherMap API](https://openweathermap.org/api)

## License

This project is licensed under the MIT License.

---

