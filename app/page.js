import Link from "next/link";
import { orbitron } from "./layout";

export default function Home(){
  const imgSrc = "/home.svg"
  return <>

  <article className=" md:mx-[10vw] sm:mx-[5vw] my-20 mx-auto grid place-items-center md:grid-flow-col grid-flow-row items-center">
    
    <div className="md:mx-0 mx-auto">
      <h1 className={`${orbitron.className} capitalize text-4xl text-light tracking-wider leading-10`}>
        welcome to the {" "} <br />
        <span className="text-yellow-300">tech heaven 👊 </span>
      </h1>
    </div>

    <div className="md:w-[40vw] w-[90vw]">
      <img src={imgSrc} alt="banner image" className="hero-image"  />
    </div>
  </article>

  </>
} 