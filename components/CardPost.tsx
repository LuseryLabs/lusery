import { Post } from "@/typings";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

type Props = {
  post: Post;
};

const CardPost: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="flex flex-col group cursor-pointer">
        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
          {post.feature_image && (
            <Image
              className="object-cover object-left lg:object-center"
              src={post.feature_image}
              alt={post.created_at}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
            />
          )}

          <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
            <div>
              <p className="font-bold">{post.title} </p>
              <p>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
              {post.tags?.map((tag) => (
                <div
                  key={tag.id}
                  className="bg-[#0AABF7] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                >
                  <p>{tag.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 flex-1">
          <p className="underline text-lg font-bold"> {post.title}</p>
          <p className="line-clamp-2 text-gray-500">{post.excerpt}</p>
        </div>
        <p className="mt-5 font-bold flex items-center group-hover:underline">
          Read Post
          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </p>
      </div>
    </Link>
  );
};

export default CardPost;
