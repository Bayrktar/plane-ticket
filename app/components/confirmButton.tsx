import React from 'react'

interface ConfirmButtonProps {
    disabled: boolean;
    onClick?: () => void;
}

export default function ConfirmButton({ disabled, onClick }: ConfirmButtonProps) {
  return (
    <div>
        <button type="submit"
        disabled={disabled} onClick={onClick} className={` p-4 w-full ${disabled ? "bg-[#e1e1e1]": "bg-[#c6c6c6] hover:bg-[#b6b6b6] cursor-pointer"} flex justify-center items-center gap-2 `}>
            <span className='text-2xl font-semibold'>
                İşlemleri Tamamla
            </span>
        </button>

    </div>
  )
}
