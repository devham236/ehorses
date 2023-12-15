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
        <div className="horseDivInfo">
          <p>Rasse:</p>
          <span>{horseData.rasse}</span>
        </div>
        <div className="horseDivInfo">
          <p>Preis:</p>
          <span>{horseData.price}€</span>
        </div>
        <div className="horseDivInfo">
          <p>Typ:</p>
          <span>{horseData.type}</span>
        </div>
        <div className="horseDivInfo">
          <p>Ort:</p>
          <span>
            {horseData.zip}, {horseData.city}
          </span>
        </div>
      </div>
    </div>
  )
}

export default HorseDiv
