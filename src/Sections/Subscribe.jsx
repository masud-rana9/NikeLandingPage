import Button from "../Component/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
      id="contact-us"
    >
      <h3 className="text-4xl leading-[64px] lg:max-w-md font-palanquin font-bold">
        Sign Up from <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-o=col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          placeholder="Suscribe@nike.com"
          className="input w-full border"
          type="text"
        />
        <Button label="Sign Up" />
      </div>
    </section>
  );
};

export default Subscribe;
