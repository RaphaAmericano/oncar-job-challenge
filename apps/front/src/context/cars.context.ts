"use client"
import { useEffect, useState } from "react";
import { getCars } from "../services/api";
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

    const car = (id: number) => {
        return cars.find((car) => car.id === id)
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