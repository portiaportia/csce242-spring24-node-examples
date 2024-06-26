import "../styles/houseplan.css";

const HousePlan = (housePlan) => {
  const imageSrc = `https://portiaportia.github.io/json/images/house-plans/${housePlan.main_image}`;
  return (
    <section className="house-plan columns">
      <section className="feature-image">
        <img src={imageSrc} alt={housePlan.name} />
      </section>
      <section className="info">
        <h3>{housePlan.name}</h3>
        <p>Size: {housePlan.size}</p>
        <p>Bedrooms: {housePlan.bedrooms}</p>
        <p>Bathrooms: {housePlan.bathrooms}</p>
        <p>
          {housePlan.features.map((feature) => {
            return feature + ", ";
          })}
        </p>
      </section>
    </section>
  );
};

export default HousePlan;
