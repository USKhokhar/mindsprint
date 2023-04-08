import Link from "next/link";
import { orbitron } from "../layout";

export default function BlockButton({ route, title }){
    return <Link href={route}>
        <button className={`${orbitron.className} text-center text-light bg-primary border border-secondary rounded-lg px-8 py-4 md:w-[30vw] sm:w-[35vw] w-[80vw] hover:bg-secondary transition delay-150 duration-300 ease-in-out tracking-wide aspect-[25/9] hover:shadow-[#333333_0px_6px_10px]`}>
            {title}
        </button>
    </Link>
}