const apiKey = "e7bdce96c739023a6df01df3fd170eea"; 
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    resultDiv.innerHTML = "Loading...";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const weather = `
       <strong>${data.name}</strong><br />
       Temperature: ${data.main.temp} °C<br />
       Weather: ${data.weather[0].description}<br />
         Wind Speed: ${data.wind.speed} m/s
    `;

    resultDiv.innerHTML = weather;
  } catch (error) {
    resultDiv.innerHTML = `<span style="color:red;">${error.message}</span>`;
  }
}
