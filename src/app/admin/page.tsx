import { getServerSession } from "next-auth";
import { authConfig } from "../../configs/auth";
import Link from "next/link";
import { Post } from "@/types/types";
import { fetchPosts } from "@/helper/fetchPosts";
import PageCard from "@/components/PostCard";
import Image from "next/image";

export default async function AdminPanel() {
  const session = await getServerSession(authConfig);
  const posts = await fetchPosts();
  const isAdmin = session?.user?.role === "admin";
  return (
    <div className="max-w-7xl mx-auto mt-12 px-6">
      <div className="bg-gray-200 rounded-2xl shadow-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-500 mt-1">Manage posts and users</p>
          </div>

          <div className="flex items-center gap-4">
            {session?.user && (
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">
                  {session.user.name}
                </span>
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-300 shadow-sm"
                  />
                )}
              </div>
            )}
            <Link
              href="/"
              className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="grid gap-6 max-w-3xl mx-auto mt-8">
          {posts.slice(0, 5).map((post: Post) => (
            <div
              key={post.id}
              className="bg-blue-500 transition-colors duration-500 ease-in-out hover:bg-blue-950 p-6 rounded-xl shadow-md"
            >
              <PageCard post={post} />
              {isAdmin && (
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
