import Header from "../components/Header";
import { fetchCars } from "@utils";
import {HomeProps, CarProps } from "@types";
import CarCard from "@components/CarCard";
import CustomFilter from "@components/CustomFilter";
import { fuels, yearsOfProduction, manufacturers } from "@constants";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "Toyota",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "gas",
  });

  console.log(allCars);
  
  const isDataEmpty = !allCars;

  return (
    <main className="bg-gray-800">
      <Header />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
            <CustomFilter title="manufacturers" options={manufacturers} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.data?.map((car: CarProps) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {/* <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars?.length}
            /> */}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>erorr</p>
          </div>
        )}
      </div>
    </main>
  );
}
