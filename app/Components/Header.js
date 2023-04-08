import Link from "next/link";
import { lato, orbitron } from "../layout";

export default function Header(){

    const imgSrc = "/next.svg"

    return <header className="md:w-[80vw] md:mx-[10vw] sm:w-[90vw] sm:mx-[5vw] w-[98vw] mx-[1vw] md:px-8 md:py-4 fixed flex justify-between items-center bg-secondary shadow-2xl bottom-7">
        <h1 className= {`${orbitron.className} text-white w-1/3 text-2xl hidden sm:block sm:text-xl md:block`} >MindSprints</h1>

        <nav className="mx-auto w-1/3 hidden sm:block md:block">
            <ul className="list-none flex justify-between items-center md:gap-10 sm:gap-2" >
                <li className={`${lato.className} text-light uppercase space-x-4 hover:shadow-md hover:text-yellow-200 delay-300 text-sm`}>
                    <Link className="tracking-tight hover:tracking-widest transition delay-150 duration-300 ease-in-out text-center " href={"/"}>Home</Link>
                </li>
                <li className={`${lato.className} text-light uppercase space-x-4 hover:shadow-md hover:text-yellow-200 delay-300 text-sm`}>
                    <Link className="tracking-tight hover:tracking-widest transition delay-150 duration-300 ease-in-out text-center " href={"/community"}>community</Link>
                </li>
                <li className={`${lato.className} text-light uppercase space-x-4 hover:shadow-md hover:text-yellow-200 delay-300 text-sm`}>
                    <Link className="tracking-tight hover:tracking-widest transition delay-150 duration-300 ease-in-out text-center " href={"/practice"}>Practice</Link>
                </li>
            </ul>
        </nav>
    
        <article className="flex justify-end items-center w-1/3 gap-3">
            <div className="bg-primary flex justify-center py-1 px-2 items-center rounded-full aspect-square">
            <img src={imgSrc} alt="profile_picture" className="rounded-full aspect-square w-10" />

            {/* <p className={`${lato.className} text-xs capitalize text-light`}>Profile</p> */}
        </div>

            <button className={`${lato.className} uppercase bg-green-300 w-1/3 border border-green-500 hover:bg-green-500 hover:text-light transition delay-150 duration-100 ease-in-out  text-center align-middle py-1 px-2 rounded-lg`}>
                Auth
            </button>
        </article>
    </header>
}