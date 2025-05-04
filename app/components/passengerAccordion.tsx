import React, { Dispatch, useState } from 'react'
import Passenger, {PassengerInfo} from './passenger';

interface PassengerAccordionProps {
    seats: string[];
    passengerData: {[key: number]: PassengerInfo};
    setPassengerData?: Dispatch<React.SetStateAction<{[key: number]: PassengerInfo}>>
}

export default function PassengerAccordion({ seats, passengerData, setPassengerData }: PassengerAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const count = Math.min(seats.length, 3);
    const passengers = Array.from({ length: count }, (_, index) => index + 1);

    const handleToggle = (idx: number) => { setOpenIndex(openIndex === idx ? null : idx); };

    const handleChange = (index: number, field: keyof PassengerInfo, value: string) => {
        setPassengerData?.((prev) => ({
            ...prev,
            [index]: {
                ...prev[index],
                [field]: value,
            },
        }));
    };
    return (
        <div className="w-full flex flex-col gap-4 ">
            {passengers.map((num) => (
                <Passenger
                    key={num}
                    index={num}
                    isSelected={openIndex === num}
                    onToggle={() => handleToggle(num)}
                    data={passengerData[num]}
                    onChange={handleChange}
                />
            ))}
        </div>
    )
}