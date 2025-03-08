import { useEffect, useState } from "react";
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";

const App = () => {

  let heroData=[
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give into", text2:"your passions"},
  ]
  const[HeroCount, setHeroCount] = useState(0);
  const[playStatus, setplayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  }, [])

  return (
    <div>
      <Background playStatus={playStatus} HeroCount={HeroCount}/>
      <Navbar/>
      <Hero
        setplayStatus={setplayStatus}
        heroData={heroData[HeroCount]}
        HeroCount={HeroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}
export default App;