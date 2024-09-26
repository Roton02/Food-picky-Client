import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BannerByAllPage from '../../Component/BannerByAllPage/BannerByAllPage';

const BlogDetails = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => setMeal(response.data.meals[0]))
      .catch((error) => console.error(error));
  }, [idMeal]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <BannerByAllPage ></BannerByAllPage>
        <div className="min-h-screen p-10 ">
      <div className="max-w-4xl mx-auto  shadow-xl rounded-xl overflow-hidden">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{meal.strMeal}</h1>
          <p className="text-gray-600 text-lg mb-8">{meal.strInstructions}</p>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Category: {meal.strCategory}</h3>
          <h3 className="text-2xl font-semibold text-gray-700">Area: {meal.strArea}</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogDetails;
