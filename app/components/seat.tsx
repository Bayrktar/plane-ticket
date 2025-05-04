import React, { use, useEffect, useRef, useState } from 'react'

interface SeatProps {
    id: string;
    selected: boolean;
    onToggle: () => void;

}

export default function Seat({ id, selected, onToggle }: SeatProps) {
    const [selectedSeats, setSelectedSeats] = useState<string[]>([])
    const [name, setName] = useState<string>("")
    const full = parseInt(id, 10) <= 10
    const [hover, setHover] = useState(false)

    const seat = "w-6 h-8 border border-[#c6c6c6] rounded flex items-center justify-center text-xs relative"
    let style = "bg-white hover:bg-[#ffd885] cursor-pointer"
    if (selected) style = "bg-[#feca5c]"
    if (full) style = "bg-[#e5e5e5]"
    //className={seat + style}
    useEffect(() => {
        if (full){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setName(data.name))
            .catch(error => console.error('Veri çekme hatası:', error));
        }
    }, [id, full])

    const handleClick = () => {
        if (full) {
            alert("Bu koltuk dolu, lütfen başka bir koltuk seçin.")
        } else {
            onToggle()

        }
    }


    return (
        <div
            onMouseEnter={()=> full && setHover(true)}
            onMouseLeave={()=> full && setHover(false)}
            className={ `${seat} ${style}`}
            onClick={()=> handleClick()}
            title={full ? name : id}
            >
            {full && hover && (
                
                <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-700 text-white text-xs rounded z-10 white-space-nowrap'>
                    {name}
                </div>
            )}
  
        </div>
    )
}
