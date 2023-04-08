import Link from "next/link";
import BlockButton from "../Components/BlockButton";
import { lato, orbitron, roboto } from "../layout";

export default function Community(){
    return <section className="mt-20 grid gap-16">
            <h2 className={`${orbitron.className} text-light text-3xl text-center`}>Build 👉👈   Learn</h2>

            <article className=" md:w-[70vw] sm:w-[80vw] w-[90vw] mx-auto bg-secondary bg-opacity-40 place-items-center border border-secondary rounded-sm grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 md:gap-7 sm:gap-5 gap-3 p-8 ">
                <BlockButton
                    route={"/dev"}
                    title={"Dev Role"}
                />

                <BlockButton 
                    route={"/design"}
                    title={"Design Role"}
                />

            </article>

            <p className={`${roboto.className} mx-auto text-light text-center`}>I'm only here to browse and learn... <Link href={"#"} className= {`${orbitron.className} text-yellow-300 underline hover:text-yellow-200`}>Simply Browse ➡   </Link></p>
    </section>
}