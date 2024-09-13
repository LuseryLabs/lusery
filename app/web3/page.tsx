"use client";
import React, { useEffect, useState } from 'react'
import BlogList from '@/components/BlogList'
import { Post } from "../../typings";
import MainLayout from '@/components/MainLayout';
import BannerWeb3 from '@/components/BannerWeb3';

export default function AI() {
    const [posts, setPosts] = useState<Post[]>([]);

    async function fetchPosts() {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_GHOST_API_URL}/posts/?key=${process.env.NEXT_PUBLIC_GHOST_API_KEY}&filter=tags:web3&include=authors,tags`
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
            <MainLayout>
                <BannerWeb3  />
                <BlogList posts={posts} />
            </MainLayout>
        </div>
    )
}