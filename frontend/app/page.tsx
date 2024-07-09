"use client";

import { useEffect, useState } from "react";
import { Post } from "../typings";
import BlogList from "@/components/BlogList";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_GHOST_API_URL}/posts/?key=${process.env.NEXT_PUBLIC_GHOST_API_KEY}&include=authors,tags`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setPosts(data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
};

export default Home;
