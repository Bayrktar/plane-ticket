import React from 'react'

export default function Legend() {
  return (
    <div className='grid grid-cols-3 gap-2 text-xl'>
        <div className='flex flex-col items-center gap-0.5'>
            <div className='w-4 h-6 bg-[#e5e5e5] border border-[#c6c6c6] rounded flex items-center justify-center relative'/>
            <div>
                Dolu
            </div>
        </div>
        <div className='flex flex-col items-center gap-0.5'>
            <div className='w-4 h-6 bg-[#feca5c] border border-[#c6c6c6] rounded flex items-center justify-center relative'/>
            <div>
                Seçili
            </div>
        </div>
        <div className='flex flex-col items-center gap-0.5'>
            <div className='w-4 h-6 bg-white border border-[#c6c6c6] rounded flex items-center justify-center relative'/>
            <div>
                Boş
            </div>
        </div>
        
    </div>
  )
}
