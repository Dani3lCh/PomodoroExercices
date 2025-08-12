import Clock from "./components/Clock";
import HeaderApp from "./components/HeaderApp";

export default function PomodoroApp() {
  return (
    <>
     <main className="bg-[#F5F5F5] w-full h-[100vh] ">
      <HeaderApp />
      <Clock />
     </main>
    </>
  )
}


