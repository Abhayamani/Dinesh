export default async function handler(req, res) {
    const apiKey = 'h8juxJwnonGeShOIV72BDQB97RK80BfReJmymJov';
    const nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
    try {
      const response = await fetch(nasaApiUrl);
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch NASA data' });
    }
  }
  