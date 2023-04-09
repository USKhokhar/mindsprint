import { lato, roboto } from "../layout";

export default function MiniPostCard({ image, post_title, author_name, date_posted, upvotes }){

    return <div className="border border-secondary bg-primary bg-opacity-70 hover:bg-secondary text-light transition delay-150 duration-300 ease-in-out tracking-wide inline-flex items-center justify-around px-5 py-3">
        <div className="w-1/4 border border-light border-opacity-70 aspect-video">
            <img src={image} alt="post_image" className="w-full h-full object-cover" />
        </div>

        <div>
            <p className={`${roboto.className} text-light text-lg`}>{post_title}</p>
            <p className={`${roboto.className} text-gray-400 hover:text-white capitalize text-base w-fit`}>{author_name}</p>

            <div className={`${lato.className} text-gray-500 capitalize text-sm flex justify-between`}>
                <p>📅 {date_posted}</p>
                <p>👍 {upvotes}</p>
            </div>
        </div>

        <div className="grid gap-3">
            <button className="bg-slate-700 border border-secondary hover:bg-slate-800 px-3 py-1">
                Save 
            </button>

            <button className="bg-slate-700 border border-secondary hover:bg-slate-800 px-3 py-1">
                Share
            </button>
        </div>
    </div>
}
