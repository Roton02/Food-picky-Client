import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BannerByAllPage from '../../Component/BannerByAllPage/BannerByAllPage';

const Blogs = () => {
  const [meals, setMeals] = useState([]);

  // Fetch Meals from the API
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => setMeals(response.data.meals))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <BannerByAllPage text={"Home / Blogs"} />
      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen p-10">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative group">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white group-hover:translate-y-2 transition-all">
                  <h3 className="text-lg font-bold">{meal.strMeal}</h3>
                  <p className="text-sm">{meal.strCategory} • {meal.strArea}</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{meal.strMeal}</h2>
                <p className="text-gray-600">
                  {`${meal.strInstructions.slice(0, 100)}...`}
                </p>
                {/* Redirect to BlogDetails page */}
                <Link to={`/blog/${meal.idMeal}`}>
                  <button className="text-[#E21B70] mt-4 font-semibold">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
