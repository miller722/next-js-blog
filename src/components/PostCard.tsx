import type { Post } from "@/types/types";

type PostCardProps = {
    post: Post;
  };
  
export default function PostCard({ post }: PostCardProps) {
    return (
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 leading-relaxed">{post.body}</p>
      </div>
    );
  }
  