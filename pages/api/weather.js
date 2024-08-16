export default async function handler(req, res) {
    const apiKey = '3d86da6eeebdaccbc07d10d9f3a6fd78' // Store your API key in environment variables
    const city = 'London'; // Replace with dynamic city as needed
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    try {
      const response = await fetch(weatherApiUrl);
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
  