export default async function handler(req, res) {
    const apiKey = '521752274d8b4c05ba5bea7660529b97';
    const ingredients = 'chicken'; // Replace with dynamic input as needed
    const recipeApiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(recipeApiUrl);
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch recipes' });
    }
  }
  