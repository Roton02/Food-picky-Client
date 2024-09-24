import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Country() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/country")
      .then((res) => {
        console.log("Data fetched:", res.data); // Check the data structure
        setCountry(res.data); 
      })
      .catch((err) => {
        console.error("Error fetching data:", err); // Log any errors
      });
  }, []);
  console.log(country);
  return (
    <div className="grid grid-cols-4  mt-10 max-w-7xl mx-auto">
      {country.map((country, i) => (
        <Link key={i} className="max-w-72 max-h-52  mb-6 rounded-lg relative">
         <img className="rounded-2xl w-full h-full  hover:scale-105 transition delay-100 " src={country.image} alt="something was wrong" />
           
          <button className=" font-bold  text-black  p-2 px-4 bg-gray-100 rounded-xl absolute bottom-3 left-2">
            {country.state}
          </button>{" "}
        </Link>
      ))}
    </div>
  );
}
