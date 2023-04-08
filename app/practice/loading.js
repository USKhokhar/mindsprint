import { orbitron } from "../layout";

export default function Loading(){
    return <p className={`${orbitron.className} text-yellow-200 text-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>Loading... 🤟 </p>
}