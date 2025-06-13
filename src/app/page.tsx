import Header from "../components/Header";
import PostSearch from "@/components/PostSearch";
import PostList from "@/components/PostList";
import PostSearchWrapper from "@/components/PostSearchWrapper";

export default async function Home() {
  return (
    <div className="home bg-gray-300 min-h-screen">
      <Header />
      <div className="grid gap-6 max-w-3xl mx-auto pb-6 mt-6">
      <PostSearchWrapper/>
        <div className="grid gap-6 mt-4">
          <PostList />
        </div>
      </div>
    </div>
  );
}
