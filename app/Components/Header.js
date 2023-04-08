import Link from "next/link";
import { lato, orbitron, roboto } from "../layout";

export default function Header(){

    const imgSrc = "/next.svg"

    return <header className="md:w-[80vw] md:mx-[10vw] sm:w-[90vw] sm:mx-[5vw] w-[98vw] mx-[1vw] md:px-8 md:py-4 flex justify-between items-center bg-secondary mt-7 rounded-lg shadow-[#333333_0px_6px_10px]">
        <h1 className= {`${orbitron.className} tracking-wide text-white w-1/3 text-2xl hidden sm:block sm:text-xl md:block`} >MindSprints</h1>

        <nav className="mx-auto w-1/3 hidden sm:block md:block">
            <ul className="list-none flex justify-between items-center md:gap-10 sm:gap-2" >
                <li>
                    <Link href={"/"}>
                        <span className={`${roboto.className} text-light uppercase space-x-4 hover:shadow-md hover:text-yellow-200 text-sm transition delay-150 duration-300 ease-in-out text-center tracking-wide`}>
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={"/community"}>
                        <span className={`${roboto.className} text-light uppercase space-x-4 hover:shadow-md hover:text-yellow-200 text-sm transition delay-150 duration-300 ease-in-out text-center tracking-wide`}>
                            community
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={"/practice"}>
                        <span className={`${roboto.className} text-light uppercase space-x-4 hover:shadow-md hover:text-yellow-200 text-sm transition delay-150 duration-300 ease-in-out text-center tracking-wide`}>
                            Practice
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    
        <article className="flex justify-end items-center w-1/3 gap-3">
            <Link href={"/profile"} className="bg-primary flex justify-center py-1 px-2 items-center rounded-full aspect-square">
            <img src={imgSrc} alt="profile_picture" className="rounded-full aspect-square w-10" />

            {/* <p className={`${lato.className} text-xs capitalize text-light`}>Profile</p> */}
        </Link>

            <button className={`${lato.className} uppercase bg-green-300 w-1/3 border border-green-500 hover:bg-green-500 hover:text-light transition delay-150 duration-100 ease-in-out  text-center align-middle py-1 px-2 rounded-lg`}>
                Auth
            </button>
        </article>
    </header>
}