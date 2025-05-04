import React from 'react'

interface SummaryProps {
    seats: string[];
}

export default function Summary({ seats }: SummaryProps) {
    const seatPrice = 1000
    const total = seats.length * seatPrice
  return (
    <div className='w-full h-32 bg-[#d1d1d1] inline-flex items-center justify-between'>
        <div className='space-x-2 my-auto pl-12'>
            {seats.map(seat => (
                <span key={seat} className='w-6 h-10 inline-flex items-center justify-center text-xs relative bg-[#feca5c] border border-[#b6b6b6] rounded'>
                    {seat}
                </span>
            ))}
        </div>
        <div className='flex flex-col pr-12'>
            <div className='flex flex-col '>
                <div className='flex place-self-end space-x-1'>
                    <div className='flex items-end h-6 leading-none'>
                        <span>
                            {seats.length}x
                        </span>
                    </div> 
                    <div  className='w-4 h-6 bg-[#feca5c] border border-[#b6b6b6] rounded'>
                    </div>
                </div>
                <div>
                    <span className='text-3xl font-bold'>
                        {total} TL
                    </span>
                </div>
            </div>

        </div>

    </div>
  )
}
