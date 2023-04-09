import DisplayScreen from "@/app/Components/DisplayScreen";
import MiniPostCard from "@/app/Components/MiniPostCard";
import { orbitron } from "@/app/layout";

export default function Page(){
    const count = [1, 2, 3, 4, 5]
    const imgSrc = "https://source.unsplash.com/random"
    return <>
        <h2 className={`${orbitron.className} text-light text-xl mt-6 tracking-wider capitalize text-center`}>your time to Be Bob the Builder!</h2>

        <section className="flex">
            <article className="grid w-[40vw] py-10 cursor-pointer">
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
        </article>

            <article>
                <DisplayScreen 
                    figma_link={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FV8luNmMx97zDeHdWfk15wy%2FSaathi-App%3Fnode-id%3D202%253A2%26t%3DQLnAImRGg2S9u0Wt-1"}
                    author_name={"Author"}
                    author_profile_pic={"https://source.unsplash.com/random"}
                    post_title={"Post title goes here."}
                    upvotes={10}
                    post_description={"lorem ipsum, post description in random latin words which makes no sense together but are only kept to make it look filled. I wish lorem ipsum could fill the emptiness in my heart. Emptiness. Emptiness. Tune mere jana, kabhi nahi jaana Ooo emptiness."}
                    key={Math.random() * 200}
                />
            </article>
            
        </section>
    </>
}