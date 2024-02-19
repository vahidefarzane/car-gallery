"use client";
import { fetchCar } from "@utils";
import Image from "next/image";
import {CarProps} from "@types"

export default async function carpage({
  params,
}: {
  params: { carId: number };
}) {
  const car = await fetchCar(params.carId);
  const {id }= car.data?.[0]
  
  // const {id,
  //   city_mpg,
  //   class,
  //   combination_mpg,
  //   cylinders,
  //   displacement,
  //   drive,
  //   fuel_type,
  //   highway_mpg,
  //   make,
  //   model,
  //   transmission,
  //   year} = car 

  return (
    <main>
      <div>
        <div>
          <Image
            src={`/${id}.jpg`}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div>
          {/* <Image />
          <Image />
          <Image /> */}
        </div>
      </div>
    </main>
  );
}
