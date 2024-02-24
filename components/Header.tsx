"use client";

import Image from "next/image";

import CustomButton from "../components/CustomButton";

const Header = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="flex-1 pt-3 padding-x">
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
      </div>
      <div className="header__image-container">
        <div className="header__image">
          <Image
            src="/localImages/header.png"
            alt="header"
            fill
            className="object-contain"
          />
        </div>

        <div className="header__image-overlay" />
      </div>
    </div>
  );
};

export default Header;
