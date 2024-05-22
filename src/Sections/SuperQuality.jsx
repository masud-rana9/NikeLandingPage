import Button from "../Component/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red inline-block mt-3">Super </span>
          <span className="text-coral-red inline-block mt-3">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Neque, quod.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit modi
          vitae ea molestiae consequuntur ducimus.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          className="object-contain"
          width={570}
          height={522}
          src={shoe8}
          alt=""
        />
      </div>
    </section>
  );
};

export default SuperQuality;
