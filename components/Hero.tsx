"use client";

import CustomButton from "./CustomButton";

export default function Hero() {
  const handleScroll = () => console.log("Clicou no botão!");

  return (
    <section className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car -- quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our efforts booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </section>
  );
}
