import React from 'react'
import Seat from './seat'
import Image from 'next/image'

interface SeatMapProps {
    selected: string[];
    onToggle: (id: string) => void;
}


export default function SeatMap({ selected, onToggle }: SeatMapProps) {
    const totalRows = 19
    const seatsPerRow = 4

    let seatNumber = 1
    const rows = Array.from ({length : totalRows}, ()=> 
        Array.from({length : seatsPerRow}, ()=> (seatNumber++).toString())
    )
    return (
        <div className="p-4 flex justify-center items-center">
          <div className="relative w-[850px] h-[850px]">
            <svg
              strokeWidth="0.1"
              stroke="#000"
              fill="none"
              viewBox="0 -0.5 25 25"
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m24.794 16.522-.281-2.748-10.191-5.131s.091-1.742 0-4.31c-.109-1.68-.786-3.184-1.839-4.339l.005.006h-.182c-1.048 1.15-1.726 2.653-1.834 4.312l-.001.021c-.091 2.567 0 4.31 0 4.31l-10.19 5.131-.281 2.748 6.889-2.074 3.491-.582c-.02.361-.031.783-.031 1.208 0 2.051.266 4.041.764 5.935l-.036-.162-2.728 1.095v1.798l3.52-.8c.155.312.3.566.456.812l-.021-.035v.282c.032-.046.062-.096.093-.143.032.046.061.096.094.143v-.282c.135-.21.28-.464.412-.726l.023-.051 3.52.8v-1.798l-2.728-1.095c.463-1.733.728-3.723.728-5.774 0-.425-.011-.847-.034-1.266l.003.058 3.492.582 6.888 2.074z" />
            </svg>
      
            <div className=" absolute inset-0 flex flex-col items-center justify-center">
              {rows.map((seatIds, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid grid-cols-2 gap-6 ${
                    rowIndex === 3 ? "mb-8" : "mb-1"
                  } items-center justify-center`}
                >
                  <div className="flex gap-1">
                    {seatIds.slice(0, 2).map((id) => (
                      <Seat
                        key={id}
                        id={id}
                        selected={selected.includes(id)}
                        onToggle={() => onToggle(id)}
                      />
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {seatIds.slice(2).map((id) => (
                      <Seat
                        key={id}
                        id={id}
                        selected={selected.includes(id)}
                        onToggle={() => onToggle(id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}      