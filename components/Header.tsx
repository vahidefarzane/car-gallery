"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="flex-1 padding-x">
        <h1 className="header__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="header__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </nav>
      <div className="header__image-container">
        <div className="header__image">
          <img
            src="/images/header.png"
            alt="header"
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
