import MiniPostCard from "@/app/Components/MiniPostCard";
import { orbitron } from "@/app/layout";

export default function Page(){
    const count = [1, 2, 3, 4, 5]
    const imgSrc = "https://source.unsplash.com/random"
    return <>
        <h2 className={`${orbitron.className} text-light text-xl mt-6 tracking-wider capitalize text-center`}>your time to Be Bob the Builder!</h2>

        <section className="grid md:w-[45vw] sm:w-[60vw] w-[90vw] mx-auto gap-5 py-10 cursor-pointer">
            {
                count.map((postCard) => {
                    return <MiniPostCard 
                        post_title={"Post title will go here..."}
                        author_name={"Author"}
                        image={imgSrc}
                        date_posted={"DD/MM/YY"}
                        upvotes={0}
                        key={imgSrc}
                    />
                })
            }
        </section>
    </>
}