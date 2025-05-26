"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Post } from "@/types/types";
import { fetchPosts } from "@/helper/fetchPosts";
import PageCard from "./PostCard";

export default function PostList() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts(query);
        setPosts(data);
      } catch (err) {
        console.error("Failed to load posts", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [query]);

  return (
    <div className="grid gap-6 mt-4">
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => <PageCard key={post.id} post={post} />)
      )}
    </div>
  );
}
