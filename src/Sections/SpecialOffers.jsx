import Button from "../Component/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-ful"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special </span>
          Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Neque, quod.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          qui possimus voluptate, quam error, autem nobis eligendi animi facere
          iure excepturi? Veritatis officia facilis adipisci impedit, itaque id
          fuga iste?
        </p>
        <div className="mt-11">
          <Button label="Shop Now" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
