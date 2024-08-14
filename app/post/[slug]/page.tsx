"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Post } from "@/typings";
import Image from "next/image";

const PostPage: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams();


  useEffect(() => {

    console.log('API URL:', process.env.NEXT_PUBLIC_GHOST_API_URL);
    console.log('API KEY:', process.env.NEXT_PUBLIC_GHOST_API_KEY);
    console.log('Fetching post for slug:', slug);
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_GHOST_API_URL}/posts/slug/${slug}/?key=${process.env.NEXT_PUBLIC_GHOST_API_KEY}&include=authors,tags`
        );
        const data = await res.json();
        if (data.posts && data.posts.length > 0) {
          setPost(data.posts[0]);
        } else {
          setError("Post not found");
        }
      } catch (error) {
        setError("Error fetching post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article className="px-10 pb-28">
      <section className="space-x-2 border border-[F7AB0A] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
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
          </div>

          <section className="p-5 bg-[#0AABF7] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              {post.authors && post.authors.length > 0 && (
                <div className="flex items-center space-x-2">
                  {post.authors[0].profile_image && (
                    <Image
                      className="rounded-full"
                      src={post.authors[0].profile_image}
                      alt={post.authors[0].name}
                      height={40}
                      width={40}
                      priority={true}
                    />
                  )}

                  <div className="w-64">
                    <h3 className="text-lg font-bold">{post.authors[0].name}</h3>
                  </div>
                </div>
              )}
            </div>
            <div>
              <h2 className="italic pt-10">{post.title}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.tags.map((tag) => (
                  <p
                    key={tag.id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {tag.name}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="mt-10">
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
    </article>
  );
};

export default PostPage;