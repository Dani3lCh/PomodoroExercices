
import { useClock } from "../hooks/UsesClock"
import StateClock from "./StateClock"

export default function Clock(){
  const {handleStart,handlePause,handleReset,formatTime}  = useClock()

  return (
    <>
    
      <div className="flex justify-center items-center">
        <h2 className="text-3xl">Clock</h2>
      </div>
        <StateClock/>
      <div className="flex justify-center items-center mt-4">
        <h1 className="text-6xl font-bold">{formatTime()}</h1>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button className="border-2 border-[#FF6B6B]  hover:bg-[#FF6B6B] text-gray-900 px-4 py-2 rounded-full"
          onClick={handleStart}
        >
          Start
        </button>
        <button className="bg-[#4ECDC4] text-white px-4 py-2 rounded-full ml-4"
        onClick={handlePause}

        >
          Pause
        </button>
        <button className="bg-[#FF9F43] text-white px-4 py-2 rounded-full ml-4"
        onClick={handleReset}
        >
          Reset
        </button>


      </div>

    </>
  )

}