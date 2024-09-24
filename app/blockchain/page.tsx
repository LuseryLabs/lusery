"use client";
import React, { useEffect, useState } from 'react'
import BlogList from '@/components/BlogList'
import { Post } from "../../typings";
import MainLayout from '@/components/MainLayout';
import Banner from "@/components/Banner";

export default function AI() {
    const [posts, setPosts] = useState<Post[]>([]);

    async function fetchPosts() {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_GHOST_API_URL}/posts/?key=${process.env.NEXT_PUBLIC_GHOST_API_KEY}&filter=tags:blockchain&include=authors,tags`
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
                <Banner
                    title="Tecnología blockchain"
                    subtitle="a tu sitio favorito"
                    spanText="Blockchain"
                    description="New product features | The latest in technology | The weekly debugging nightmares & More!"
                />
                <BlogList posts={posts} />
            </MainLayout>
        </div>
    )
}