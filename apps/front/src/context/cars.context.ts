"use client"
import { useEffect, useState } from "react";
import { getCars } from "../services/api";
import { Car } from "types";
function useCars(){
    const [cars, setCars ] = useState<any[]>([])
    async function fetchData(){
        try {
          const cars = (await getCars()).data;
          if(Array.isArray(cars)){
              setCars(cars)
          }
        } catch (e) {
            console.error(e)
        }
    } 

    const car = (id: number): Car => {
        return cars.find((car: Car) => car.id === id)
    }

    useEffect(() => {
        fetchData()
    },[])

    return { 
        cars,
        car
    }
}

export default useCars