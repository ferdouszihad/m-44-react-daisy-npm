import { IoCheckmarkDoneCircle } from "react-icons/io5";

const PriceCard = ({ card }) => {
  return (
    <div className="card  bg-base-100  shadow-sm ">
      <div className="card-body ">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{card.name}</h2>
          <span className="text-xl">{card.price}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {card.features.map((feature) => (
            <div className="flex items-center gap-2" key={feature}>
              <IoCheckmarkDoneCircle className="text-green-400 " size={20} />
              <li>{feature}</li>
            </div>
          ))}
        </ul>
        <div className="mt-auto">
          <button className="btn btn-primary btn-block">
            {card.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
