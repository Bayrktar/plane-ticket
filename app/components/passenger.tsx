import React from "react";
import Image from "next/image";

export interface PassengerInfo {
    name: string;
    surname: string;
    phone: string;
    email: string;
    gender: string;
    birthDate: string;
}

interface PassengerProps {
  index: number;
  isSelected?: boolean;
  onToggle?: () => void;
  data: PassengerInfo;
  onChange?: (index: number, field: keyof PassengerInfo, value: string) => void;
}

export default function  Passenger({ index, isSelected, onToggle, data, onChange }: PassengerProps) {
    
    return (
    <div className="p-4">
        <button
            onClick={onToggle}
            className="w-full flex justify betwwen p-4 bg-[#c6c6c6]  hover:bg-[#b6b6b6] cursor-pointer"
        >
            <div className="px-4 flex justify-between w-full items-center font-semibold ">
                <span>{index}. Yolcu</span>
                <span>
                    <Image
                        src={isSelected ? "/arrow-down.svg" : "/arrow-right.svg"}
                        alt=""
                        width={16}
                        height={16}/>
                </span>
            </div>
        </button>
        {isSelected && (
            <div className="p-2 space-y-2 grid grid-cols-2 gap-4 font-semibold">
                <div className="flex flex-col gap-1">
                    <label className="text-sm">İsim</label>
                    <input 
                    required 
                    type="text"
                    maxLength={50}
                    onChange={(e) => onChange?.(index, "name", e.target.value)}
                    className="border p-1 border-[#c6c6c6] text-sm font-normal" />
                </div>
                <div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Soyisim</label>
                        <input 
                        required 
                        type="text"
                        maxLength={30}
                        onChange={(e) => onChange?.(index, "surname", e.target.value)}
                        className="border p-1 border-[#c6c6c6] text-sm font-normal" />
                    </div> 
                </div>
                <div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Telefon</label>
                        <input 
                        required 
                        type="text"
                        inputMode="numeric"
                        pattern="\\d*"
                        title="Başına 0 koyarak, boşluksuz yazın" 
                        maxLength={11}
                        onChange={(e) => onChange?.(index, "phone", e.target.value.replace(/\D/g, ''))}
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                        }}
                        className="border p-1 border-[#c6c6c6] text-sm font-normal" />
                    </div> 
                </div>
                <div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm">E-posta</label>
                        <input 
                        required 
                        type="text"
                        onChange={(e) => onChange?.(index, "email", e.target.value)} 
                        className="border p-1 border-[#c6c6c6] text-sm font-normal" />
                    </div> 
                </div>
                <div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Cinsiyet</label>
                        <input 
                        required 
                        type="text"
                        pattern="^(Erkek|Kadın)$"
                        title="Cinsiyet: Erkek veya Kadın" 
                        onChange={(e) => onChange?.(index, "gender", e.target.value)}
                        className="border p-1 border-[#c6c6c6] text-sm font-normal" />
                    </div> 
                </div>  
                <div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Doğum Tarihi</label>
                        <input 
                        required 
                        type="string"
                        onChange={(e) => onChange?.(index, "birthDate", e.target.value)}
                        className="border p-1 border-[#c6c6c6] text-sm font-normal" />
                    </div>                        

                </div>                        

            </div>
        )}
    </div>
  )
}