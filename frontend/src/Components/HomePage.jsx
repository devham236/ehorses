import React, { useEffect, useState } from "react"
import HorseDiv from "./HorseDiv"
import axios from "axios"
import { motion } from "framer-motion"
import { container, item } from "../Variants/animations"

const HomePage = () => {
  const [horses, setHorses] = useState(null)

  useEffect(() => {
    getHorses()
  }, [])

  const getHorses = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/horses")
      setHorses(data)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-[100vw] h-[100vh] bg-slate-800 flex flex-col items-center justify-start"
    >
      <div className="w-full h-[30%] flex flex-col items-center justify-center sm:text-center">
        <motion.div variants={item} className="mb-4 flex">
          <i className="fa-solid fa-horse icon mr-4"></i>
          <h1 className="font-bold text-4xl text-white">E-Horses</h1>
          <i className="fa-solid fa-horse icon ml-4"></i>
        </motion.div>
        <motion.h1
          variants={item}
          className="font-bold text-4xl text-white mt-2"
        >
          Der weltweit größte Online Pferdemarkt
        </motion.h1>
      </div>
      <div className="w-full h-[70%] p-3 flex items-center justify-center">
        <motion.div
          variants={item}
          className="2xl:w-[60%] max-h-full overflow-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        >
          {horses &&
            horses.map((horse, index) => (
              <HorseDiv key={index} horseData={horse} />
            ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HomePage
