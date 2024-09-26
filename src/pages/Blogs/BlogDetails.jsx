import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BannerByAllPage from "../../Component/BannerByAllPage/BannerByAllPage";

const BlogDetails = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => setMeal(response.data.meals[0]))
      .catch((error) => console.error(error));
  }, [idMeal]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="min-h-screen  py-10 mt-">
        {/* Main container */}
        <div className="max-w-7xl mx-auto  shadow-md overflow-hidden transition-transform duration-500 ">
          {/* Hero Section */}
          <div className="relative">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-[500px] object-cover filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                {meal.strMeal}
              </h1>
              <p className="mt-4 text-2xl md:text-3xl font-light">
                {meal.strCategory} • {meal.strArea}
              </p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-10 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Discover {meal.strMeal}
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Explore the culinary richness of {meal.strArea} through one of its
              most iconic dishes, the {meal.strMeal}. Learn about its rich
              history, the cultural significance of its ingredients, and the
              unique techniques that have made it a beloved favorite worldwide.
            </p>

            {/* Ingredients Section */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Key Ingredients
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              Using the finest and freshest ingredients is crucial to mastering
              this dish. Here’s a list of what you need to recreate the
              authentic flavors:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700 mb-8 list-disc pl-5">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                const ingredient = meal[`strIngredient${num}`];
                const measure = meal[`strMeasure${num}`];
                return ingredient ? (
                  <li key={num} className="mb-2">
                    <span className="font-semibold">{ingredient}</span> -{" "}
                    {measure}
                  </li>
                ) : null;
              })}
            </ul>

            {/* Chef's Note */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Chef's Note
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                "To truly appreciate this dish, be sure to use high-quality
                ingredients and allow the flavors to develop slowly. This recipe
                is not just about taste; it’s about bringing the culture of{" "}
                {meal.strArea} into your home kitchen."
              </p>
              <p className="text-gray-600 mt-4 italic">
                — Chef Maria Rodriguez
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="flex items-center bg-gray-100 p-6 rounded-lg">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Category Icon"
                  className="w-20 h-20 mr-4 object-cover rounded-full shadow-lg"
                />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Category
                  </h4>
                  <p className="text-gray-600">{meal.strCategory}</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 p-6 rounded-lg">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Area Icon"
                  className="w-20 h-20 mr-4 object-cover rounded-full shadow-lg"
                />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">Area</h4>
                  <p className="text-gray-600">{meal.strArea}</p>
                </div>
              </div>
            </div>

            {/* Preparation Tips */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Preparation Tips
            </h2>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              Perfecting this dish requires attention to detail. Be mindful of
              cooking times, as overcooking can lead to loss of texture. Always
              taste as you go to balance the flavors of the ingredients.
            </p>

            {/* Related Recipes */}
            <div className="bg-pink-100 p-6 rounded-lg shadow-lg mb-16">
              <h3 className="text-3xl font-semibold text-[#E21B70] mb-4">
                Explore Related Recipes
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <li className="text-gray-600">Spicy {meal.strMeal} Curry</li>
                <li className="text-gray-600">
                  Mediterranean {meal.strMeal} Salad
                </li>
                <li className="text-gray-600">
                  {meal.strMeal} with Rice Pilaf
                </li>
              </ul>
            </div>

            {/* Footer Section */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-12 mt-16">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800">
                  Ready to cook {meal.strMeal}?
                </h3>
                <p className="text-lg text-gray-600 mt-4">
                  Follow the recipe and let us know how it turns out. Share your
                  culinary creation with us using the hashtag
                  #MyFoodPickyExperience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
