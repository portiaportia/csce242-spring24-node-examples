import React, { useState, useEffect } from "react";
import axios from "axios";
import HousePlan from "../components/houseplan";

const Home = () => {
  const [housePlans, setHousePlans] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://portiaportia.github.io/json/house-plans.json"
      );
      setHousePlans(response.data);
    })();
  }, []);

  return (
    <div>
      {housePlans.map((housePlan) => (
        <HousePlan
          key={housePlan.name}
          name={housePlan.name}
          size={housePlan.size}
          main_image={housePlan.main_image}
          bedrooms={housePlan.bedrooms}
          bathrooms={housePlan.bathrooms}
          features={housePlan.features}
        />
      ))}
    </div>
  );
};

export default Home;
