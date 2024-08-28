"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Post } from "@/typings";
import PostHeader from "@/components/post/PostHeader";
import PostContent from "@/components/post/PostContent";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import PostRecommended from "@/components/PostRecommended";

const PostPage: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [nextPost, setNextPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams();

  useEffect(() => {
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

  useEffect(() => {
    if (!post) return;

    const fetchNextPost = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_GHOST_API_URL}/posts/?key=${process.env.NEXT_PUBLIC_GHOST_API_KEY}&limit=1&filter=created_at:>'${post.created_at}'&order=created_at asc`
        );
        const data = await res.json();
        if (data.posts && data.posts.length > 0) {
          setNextPost(data.posts[0]);
        }
      } catch (error) {
        console.error("Error fetching next post:", error);
      }
    };

    fetchNextPost();
  }, [post]);

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
      <Navbar />

      <PostHeader
        title={post.title}
        created_at={post.created_at}
        feature_image={post.feature_image}
        authors={post.authors}
        tags={post.tags}
        excerpt={post.excerpt}
      />

      <PostContent htmlContent={post.html} />

      {nextPost && <PostRecommended post={nextPost} />}
      <Footer />
    </article>
  );
};

export default PostPage;
