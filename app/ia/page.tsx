"use client";
import React, { useEffect, useState } from 'react'
import BlogList from '@/components/BlogList'
import { Post } from "../../typings";
import MainLayout from '@/components/MainLayout';
import Banner from '@/components/Banner';

export default function AI() {
    const [posts, setPosts] = useState<Post[]>([]);

    async function fetchPosts() {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_GHOST_API_URL}/posts/?key=${process.env.NEXT_PUBLIC_GHOST_API_KEY}&filter=tags:ia&include=authors,tags`
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
                    title="Inteligencia Artificial"
                    subtitle="a tu blog de confianza"
                    spanText="locos por la Automatización"
                    description="Noticias | Lo último en automatizaciones | IA y mucho más!"
                />
                <BlogList posts={posts} />
            </MainLayout>
        </div>
    )
}