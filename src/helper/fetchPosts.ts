import { Post } from "@/types/types";

export async function fetchPosts(searchTerm?: string): Promise<Post[]> {
  const query = searchTerm ? `?q=${encodeURIComponent(searchTerm)}` : "";
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/posts${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await res.json();
}
