import Header from "../components/Header";
import { fetchCars } from "@utils";
import { CarCardProps, HomeProps, CarProps } from "@types";
import SearchBar from "@components/SearchBar";
import CarCard from "@components/CarCard";
import CustomFilter from "@components/CustomFilter";
import { fuels, yearsOfProduction } from "@constants";
import ShowMore from "@components/ShowMore";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars();
  console.log(allCars);
  const isDataEmpty = !allCars 

  return (
    <main>
      <Header />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.data?.map((car: CarProps) => (
                <CarCard car={car} />
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
