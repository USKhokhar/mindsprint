import Link from "next/link";

export default function PracticePageCard({image, title, level, route}){
    return <Link href={route} className="w-full aspect-[9/16] bg-primary border border-secondary rounded-md">
        <div className="h-2/3 aspect-[9/16]">
            <img src={image} alt="catalog_card_image" />
        </div>

        <div className="h-1/3">
            <p className="text-light text-base capitalize">{title}</p>
            <p className="text-gray-400 text-xs uppercase">{level}</p>
        </div>
    </Link>
}