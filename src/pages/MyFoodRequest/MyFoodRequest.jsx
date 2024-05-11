import axios from "axios";
import { useEffect, useState } from "react";

const MyFoodRequest = () => {
    const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/featured").then((res) => {
      setFoods(res.data.filter((s) => s.status === "Requsted"));
    });
  }, []);
  console.log(foods);
    return (
        <div>
            <h1>hellow from my food</h1>
        </div>
    );
};

export default MyFoodRequest;