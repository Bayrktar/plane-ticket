"use client";

import React, { use, useCallback, useEffect, useRef, useState } from "react";
import Passenger, {PassengerInfo} from "./components/passenger";
import PassengerAccordion from "./components/passengerAccordion";
import ConfirmButton from "./components/confirmButton";
import Seat from "./components/seat";
import SeatMap from "./components/seatMap";
import Legend from "./components/legend";
import Summary from "./components/summary";

export default function Home() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const passengerCount = selectedSeats.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)



  const initialData:{[ key: number]: PassengerInfo} = {}
  for (let i = 1; i <= passengerCount; i++) {
    initialData[i] = {
      name: "",
      surname: "",
      phone: "",
      email: "",
      gender: "",
      birthDate: "",
    };
  }
  const [passengerData, setPassengerData] = useState<{[key: number]: PassengerInfo}>(initialData);

  useEffect(() => {
    const data: {[key: number]: PassengerInfo} = {};
    for (let i = 1; i <= passengerCount; i++) {
      data[i] = {
        name: "",
        surname: "",
        phone: "",
        email: "",
        gender: "",
        birthDate: "",
      };
    }
    setPassengerData(data);
  }, [passengerCount]);

  
  useEffect(() => {
    const savedSeats = typeof window !== "undefined" ? localStorage.getItem("selectedSeats") : null;
    if (savedSeats) {
      setSelectedSeats(JSON.parse(savedSeats));
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    }
  }, [selectedSeats]);
  const toggleSeat = (id: string) => {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((seat) => seat !== id) : [...prev, id]
    );
  };

  const isFormValid = () => {
    if (passengerCount === 0) return false;
    for (let i = 1; i <= passengerCount; i++) {
      const info = passengerData[i];
      if (!info || Object.values(info).some((value) => !value)) {
        return false;
      }
    }
    return true;
  };
  
  const startTimer = () => {
    if (timerRef.current) {
        clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
        const devamEt = window.confirm("İşleme devam etmek istiyor musunuz?")
        if (devamEt){
            startTimer()
        }
        else {
          localStorage.removeItem("selectedSeats")
          setSelectedSeats([])
            window.location.reload()
        }
    }
    , 30000)
  }

  useEffect(() => {
      if(selectedSeats.length === 1){
          startTimer()
      }else if (selectedSeats.length === 0){
          if (timerRef.current) {
              clearTimeout(timerRef.current)
              timerRef.current = null
          }
      }
  }
  , [selectedSeats])

    useEffect(() => {
    if (Object.keys(passengerData).length > 0) {
      startTimer();
    }
  }, [passengerData, startTimer]);

  useEffect(() => {
      return () => {
          if (timerRef.current) {
              clearTimeout(timerRef.current)
          }
      }
  }, [])

  const handleSubmit = () => {
    alert("İşleminiz başarıyla tamamlandı!");
  }


  return (
    <main className="font-sans grid grid-cols-2 gap-4 p-4">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-1">
          <SeatMap selected={selectedSeats} onToggle={toggleSeat}/>
          <Legend/>
        </div>
      </div>
      <div className="w-5/6 flex flex-col gap-10">
        <div className="flex flex-col gap-32 px-28">


        <PassengerAccordion seats={selectedSeats} passengerData={passengerData} setPassengerData={setPassengerData}/>
          
        </div>
        <ConfirmButton disabled={!isFormValid()} onClick={handleSubmit}/>
        <Summary seats={selectedSeats}/>
      </div>


    </main>
  );
}
