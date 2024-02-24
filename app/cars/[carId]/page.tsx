import Image from "next/image";
import { Metadata } from "next";
import { fetchCar } from "@utils";
import supabaseLoader from "../../../supabase-image-loader";
import CustomButton from "../../../components/CustomButton";

type Props = {
  params: {
    carId: number;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = await fetchCar(params.carId);
  return {
    title: `Sicar | ${car.model} - ${car.year} `,
  };
}

export default async function carpage({
  params,
}: {
  params: { carId: number };
}) {
  const car = await fetchCar(params.carId);

  const {
    id,
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  return (
    <main>
      <div className="car-details">
        <div className="car-details__wrapper">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="car-details__section">
              <div className="car-details__main-image-wrapper">
                <Image
                  src={`https://tvleyqfprpfmegrcnshe.supabase.co/storage/v1/object/public/images/${id}.jpg`}
                  alt="car model"
                  // loader={supabaseLoader}
                  width={530}
                  height={500}
                />
              </div>
              <div className="car-details__mini-image-wrapper">
                <Image
                  src={`https://tvleyqfprpfmegrcnshe.supabase.co/storage/v1/object/public/images/${id}-1.jpg`}
                  // loader={supabaseLoader}
                  alt="car model"
                  width={170}
                  height={200}
                />
                <Image
                  src={`https://tvleyqfprpfmegrcnshe.supabase.co/storage/v1/object/public/images/${id}-2.jpg`}
                  // loader={supabaseLoader}
                  alt="car model"
                  width={170}
                  height={200}
                />
                <Image
                  src={`https://tvleyqfprpfmegrcnshe.supabase.co/storage/v1/object/public/images/${id}-3.jpg`}
                  // loader={supabaseLoader}
                  alt="car model"
                  width={170}
                  height={200}
                />
              </div>
              <div>
                <CustomButton
                  title="Rent"
                  containerStyles="w-full py-[16px] rounded-full bg-primary-blue mt-4"
                  textStyles="text-white text-[14px] leading-[17px] font-bold"
                  
                />
              </div>
            </div>
            <div className="car-details__section">
              <h2 className="car-details__title">
                {make} - {model}
              </h2>
              <div className="car-details__table-wrapper">
                <table className="car-details__table">
                  <thead className="car-details__table-heading">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        option
                      </th>
                      <th scope="col" className="px-6 py-3">
                        detail
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="car-details__table-row">
                      <th
                        scope="row"
                        className="car-details__table-row-heading"
                      >
                        city_mpg
                      </th>
                      <td className="px-6 py-4">{city_mpg}</td>
                    </tr>
                    <tr className="car-details__table-row">
                      <th
                        scope="row"
                        className="car-details__table-row-heading"
                      >
                        combination_mpg
                      </th>
                      <td className="px-6 py-4">{combination_mpg}</td>
                    </tr>
                    <tr className="car-details__table-row">
                      <th
                        scope="row"
                        className="car-details__table-row-heading"
                      >
                        year
                      </th>
                      <td className="px-6 py-4">{year}</td>
                    </tr>
                    <tr className="car-details__table-row">
                      <th
                        scope="row"
                        className="car-details__table-row-heading"
                      >
                        cylinders
                      </th>
                      <td className="px-6 py-4">{cylinders}</td>
                    </tr>
                    <tr className="car-details__table-row">
                      <th
                        scope="row"
                        className="car-details__table-row-heading"
                      >
                        displacement
                      </th>
                      <td className="px-6 py-4">{displacement}</td>
                    </tr>
                    <tr className="car-details__table-row">
                      <th
                        scope="row"
                        className="car-details__table-row-heading"
                      >
                        drive
                      </th>
                      <td className="px-6 py-4">{drive}</td>
                    </tr>
                    <tr className="car-details__table-row">
                      <th
                        scope="row"
                        className="car-details__table-row-heading"
                      >
                        fuel_type
                      </th>
                      <td className="px-6 py-4">{fuel_type}</td>
                    </tr>
                    <tr className="car-details__table-row">
                      <th
                        scope="row"
                        className="car-details__table-row-heading"
                      >
                        highway_mpg
                      </th>
                      <td className="px-6 py-4">{highway_mpg}</td>
                    </tr>
                    <tr className="car-details__table-row">
                      <th
                        scope="row"
                        className="car-details__table-row-heading"
                      >
                        transmission
                      </th>
                      <td className="px-6 py-4">{transmission}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              ​
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
