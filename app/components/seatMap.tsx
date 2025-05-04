import React from 'react'
import Seat from './seat'

interface SeatMapProps {
    selected: string[];
    onToggle: (id: string) => void;
}


export default function SeatMap({ selected, onToggle }: SeatMapProps) {
    const totalRows = 14
    const seatsPerRow = 4

    let seatNumber = 1
    const rows = Array.from ({length : totalRows}, ()=> 
        Array.from({length : seatsPerRow}, ()=> (seatNumber++).toString())
    )
    return (
    <div>
        <div className='p-8 justify-center items-center'>
            {rows.map((seatIds, rowIndex) => (
                <div key={rowIndex} className={`grid grid-cols-2 gap-8 ${ rowIndex === 3 ? 'mb-8':'mb-2'} items center justify-center`}>
                    <div className='flex gap-2'>
                        {seatIds.slice(0, 2).map((id) => (
                        <Seat
                            key={id}
                            id={id}
                            selected={selected.includes(id)}
                            onToggle={() => onToggle(id)}
                        />
                        ))}
                    </div>
                    <div className='flex gap-2'>
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
  )
}
