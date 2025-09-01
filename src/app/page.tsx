import Header from "../components/Header";
import PostList from "@/components/PostList";
import PostSearchWrapper from "@/components/PostSearchWrapper";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="home bg-gray-300 min-h-screen">
      <Header />
      <div className="grid gap-6 max-w-3xl mx-auto pb-6 mt-6">
      <PostSearchWrapper/>
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostList />
      </Suspense>
      </div>
    </div>
  );
}
