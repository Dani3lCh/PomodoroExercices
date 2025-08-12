import { useEffect, useState } from "react"

export function useClock(){
  const [tiempo, setTiempo] = useState(1500) // 25 minutos en segundos
  const [star,setStar] = useState(false)
  const [pause, setPause] = useState(false)
  const [reset, setReset] = useState(false)

  const handleStart = () => {
    setStar(true)
  }

  const handlePause = () => {
    setStar(false)
    setPause(true)
  }
  
  const handleReset = () => {
    setTiempo(1500)
    setReset(true)
  }

  useEffect(()=>{
    let intervalo:number
    if(star){
      intervalo = setInterval(() => {
        setTiempo(prevTiempo => prevTiempo - 1)
      }, 1000)
      
      return () => clearInterval(intervalo)
    }
  },[star, pause, reset])

  // Función para formatear el tiempo en formato mm:ss
  const formatTime = () => {
    const minutes = Math.floor(tiempo / 60);
    const seconds = tiempo % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return{
    tiempo,
    star,
    pause,
    reset,
    handleStart,
    handlePause,
    handleReset,
    formatTime
  }
}