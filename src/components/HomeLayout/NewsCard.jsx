import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function NewsCard({ news }) {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = news;

    const publishedDate = new Date(author.published_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="card bg-base-100 shadow-md  rounded-md">
            <div className="flex bg-base-200 items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="text-sm font-semibold">{author.name}</h3>
                        <p className="text-xs text-gray-500">{publishedDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <button className="btn btn-sm btn-circle btn-ghost">
                        <CiBookmark size={24} />
                    </button>
                    <button className="btn btn-sm btn-circle btn-ghost">
                        <CiShare2 size={24} />
                    </button>
                </div>
            </div>

            <div className="card-body p-4">
                <h2 className="card-title text-base lg:text-lg">{title}</h2>

                <img
                    src={thumbnail_url}
                    alt="thumbnail"
                    className="rounded-lg w-full h-[262px] object-cover my-3"
                />

                <p className="text-sm text-gray-700">
                    {details.slice(0, 150)}...
                    <Link to={`/news-details/${id}`} className="text-blue-500 ml-1 cursor-pointer">Read More</Link>
                </p>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2 text-orange-400">
                        {[...Array(rating.number)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        <span className="text-sm text-black">{rating.number}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
