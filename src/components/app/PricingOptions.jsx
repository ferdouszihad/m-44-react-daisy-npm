import { useEffect, useState } from "react";
import Title from "../shared/Title";
import PriceCard from "./PriceCard";

const PricingOptions = () => {
  const [priceCard, setPriceCard] = useState([]);
  useEffect(() => {
    fetch("/priceCard.json")
      .then((res) => res.json())
      .then((data) => setPriceCard(data));
  });
  return (
    <div>
      <Title>Explore Our Pricing</Title>
      <div className="price-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {priceCard.map((card) => (
          <PriceCard key={card.id} card={card}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
