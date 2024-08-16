import Layout from '../components/Layout';
import Image from 'next/image'; // Import the Image component from Next.js

export default function Portfolio({ weather, nasa, recipes }) {
  return (
    <Layout title="Portfolio - My Projects" description="Explore my portfolio projects">
      <div className="container mt-5">
        <h1>Portfolio</h1>
        <div className="row">
          <div className="col-md-4">
            <h2>Weather App</h2>
            {weather && weather.main ? (
              <>
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Condition: {weather.weather[0].description}</p>
              </>
            ) : (
              <p>Weather data not available</p>
            )}
          </div>
          <div className="col-md-4">
            <h2>Nasa API</h2>
            {nasa && nasa.title ? (
              <>
                <p>{nasa.title}</p>
                <Image src={nasa.url} alt={nasa.title} width={500} height={500} layout="responsive" />
              </>
            ) : (
              <p>NASA data not available</p>
            )}
          </div>
          <div className="col-md-4">
            <h2>Recipe Finder</h2>
            {recipes && recipes.length > 0 ? (
              recipes.map((recipe, index) => (
                <div key={index}>
                  <p>{recipe.title}</p>
                  <Image src={recipe.image} alt={recipe.title} width={500} height={500} layout="responsive" />
                </div>
              ))
            ) : (
              <p>Recipes not available</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Fetching data from the API routes
export async function getServerSideProps() {
  const [weatherRes, nasaRes, recipeRes] = await Promise.all([
    fetch('http://localhost:3000/api/weather'),
    fetch('http://localhost:3000/api/nasa'),
    fetch('http://localhost:3000/api/recipe')
  ]);

  const weather = await weatherRes.json().catch(() => null);
  const nasa = await nasaRes.json().catch(() => null);
  const recipes = await recipeRes.json().catch(() => []);

  return {
    props: {
      weather,
      nasa,
      recipes,
    },
  };
}
