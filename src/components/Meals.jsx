import { useState, useEffect } from "react";

import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals').then(response => response.json());

      if(!response.ok) {
        //DO SOME STUFF
      }
    
      setLoadedMeals(response);
    }

    fetchMeals();
  },[]);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}