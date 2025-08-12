import { useClock } from "../hooks/UsesClock"

export default function Clock(){

  const {handleStart,handlePause,handleReset,formatTime,setTiempo}  = useClock()
  const {handleFocus,handleBreak,} = useClock()

  return (
    <>
    <section className="my-3 w-full">
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-semibold ">Clock</h2>
      </div>
         <div className="flex justify-center items-center mt-4">
        <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-4 py-2 rounded-full"
        onClick={()=>{
          handleFocus()
          setTiempo(1500)
          handleReset()

        }}
        >
          Focus
        </button>
        <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-4 py-2 rounded-full ml-4"
        onClick={()=>{
          handleBreak()
          setTiempo(300)          
        }}
        >
          Break
        </button>
      </div>

      <div className="flex justify-center items-center mt-4">
        <h1 className="text-6xl font-bold">{formatTime()}</h1>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button className="border-2 border-[#FF6B6B]  hover:bg-[#FF6B6B] text-gray-900 px-4 py-2 rounded-full"
          onClick={handleStart}
        >
          Start
        </button>

        <button className=" border-2 border-[#4ECDC4]  hover:bg-[#4ECDC4] text-gray-900 px-4 py-2 rounded-full ml-4"
        onClick={handlePause}
        >
          Pause
        </button>

        <button className=" border-2 border-[#FF9F43]  hover:bg-[#FF9F43] text-gray-900   px-4 py-2 rounded-full ml-4"
        onClick={handleReset

        }
        >
          Reset
        </button>
      </div>
    </section>

    </>
  )

}