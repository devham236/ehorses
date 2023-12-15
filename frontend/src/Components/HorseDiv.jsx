import React from "react"

const HorseDiv = ({ horseData }) => {
  return (
    <div className="w-[100%] h-[100%] border-2 p-2 rounded-lg">
      <div className="w-full h-[60%]">
        <img
          src={horseData.imgUrl}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[40%] bg-transparent flex flex-col items-center justify-center p-2">
        <div className=" text-white w-full flex items-center justify-between">
          <p className=" underline">Rasse:</p>
          <span className="font-bold">{horseData.rasse}</span>
        </div>
        <div className="text-white w-full flex items-center justify-between">
          <p className=" underline">Preis:</p>
          <span className="font-bold">{horseData.price}€</span>
        </div>
        <div className="text-white w-full flex items-center justify-between">
          <p className=" underline">Typ:</p>
          <span className="font-bold">{horseData.type}</span>
        </div>
        <div className="text-white w-full flex items-center justify-between">
          <p className=" underline">Ort:</p>
          <span className="font-bold">
            {horseData.zip}, {horseData.city}
          </span>
        </div>
      </div>
    </div>
  )
}

export default HorseDiv
