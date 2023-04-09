// "use client"

import { lato, roboto } from "../layout";

function DisplayScreen({ figma_link, post_title, post_description, author_name, author_profile_pic, upvotes}){
    //  
    return <div className="w-[65vw] grid bg-primary border border-secondary mt-10 px-5">
        <div className="flex justify-between items-center px-5 py-3 w-full">
            <div className="bg-slate-500 rounded-md px-2 py-1 flex items-center justify-between w-1/6">
                <img src={author_profile_pic} alt="author_profile_pic" className="w-1/6 rounded-full aspect-square" />
                <p className={`${roboto.className} text-sm text-light capitalize`}>{author_name}</p>
            </div>

            <button className="border border-light px-2 py-1 text-light hover:bg-light hover:text-secondary uppercase text-sm">
                follow
            </button>
        </div>
        
        <iframe width="100%" height="450" src={figma_link} allowfullscreen></iframe>

        <p className={`${roboto.className} text-light text-xl py-1`}>{post_title}</p>

        <hr />

        <div className="flex justify-between py-2 items-center">
            <span className={`${roboto.className} text-light text-base grayscale hover:grayscale-0 hover:bg-slate-400 rounded-sm bg-opacity-60 px-2 py-1 cursor-pointer `}>
                Save 📪 
            </span>

            <span className={`${roboto.className} text-light text-base grayscale hover:grayscale-0 hover:bg-slate-400 rounded-sm bg-opacity-60 px-2 py-1 cursor-pointer `}>
                👍 {upvotes}
            </span>

            <span className={`${roboto.className} text-light text-base grayscale hover:grayscale-0 hover:bg-slate-400 rounded-sm bg-opacity-60 px-2 py-1 cursor-pointer `}>
                Share ⤴ 
            </span>
        </div>

        <hr />
        <div>
            <p className={`text-justify text-gray-400 py-3 ${roboto.className} text-sm`}>
                {post_description}
            </p>
        </div>
    </div>
}

export default DisplayScreen;