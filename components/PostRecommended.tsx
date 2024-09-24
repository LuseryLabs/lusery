import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/typings";

type PostRecommendedProps = {
  post: Post;
};

const PostRecommended: React.FC<PostRecommendedProps> = ({ post }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-md">
      {post.feature_image && (
        <div className="relative w-32 h-20 flex-shrink-0">
          <Image
            src={post.feature_image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
      <div>
        <p className="text-sm text-gray-400">Artículo siguiente</p>
        <Link href={`/post/${post.slug}`}>
          <h2 className="text-lg font-bold text-white hover:underline">
            {post.title}
          </h2>
          <p className="text-sm text-gray-400 line-clamp-2 mt-1">
            {post.excerpt}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PostRecommended;
