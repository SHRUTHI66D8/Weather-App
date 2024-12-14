const apiKey = "db65ae726d97b12b4f641e67648661c8"; // Replace with your actual API key

// Function for handling weather input based on city name
function getWeatherByInput() {
    const city = document.getElementById("cityName").value;

    // Check if the city input is empty
    if (!city) {
        document.getElementById("weatherInfo").value = "Please enter a city name!";
        return;
    }

    // Fetch weather data from OpenWeatherMap API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Make an API request to fetch weather data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {  // Check if the city is found
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                // Show weather details in the textarea
                const weatherInfo = `Weather in ${city}:\n
                Description: ${weatherDescription}\n
                Temperature: ${temperature}°C\n
                Humidity: ${humidity}%\n
                Wind Speed: ${windSpeed} m/s`;

                document.getElementById("weatherInfo").value = weatherInfo;

                // Add background color based on weather conditions
                document.body.className = weatherDescription.toLowerCase();
            } else {
                document.getElementById("weatherInfo").value = `City not found!`;
            }
        })
        .catch(error => {
            document.getElementById("weatherInfo").value = `Error fetching weather data.`;
            console.error(error);
        });
}

// Function to get weather based on current geolocation (not implemented in this example)
function getWeatherByGeolocation() {
    document.getElementById("weatherInfo").value = `Fetching weather for your current location...`;
    // Geolocation-based weather fetching logic can go here
}
