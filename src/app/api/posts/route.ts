import { NextResponse } from "next/server";
import {posts} from "@/mock-db/posts";

export async function GET(req : Request) {
  const {searchParams} = new URL(req.url);
  const query = searchParams.get("q");
  let currentPost = posts;
  if(query) {
    currentPost = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }
  return NextResponse.json(currentPost);
}

export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);

  return NextResponse.json({body});
}

// export async function PUT(req: Request) {
//   const updatedPost = await req.json();
//   const posts = await readPosts();

//   const index = posts.findIndex((p: any) => p.id === updatedPost.id);
//   if (index === -1) {
//     return NextResponse.json({ message: "Post not found" }, { status: 404 });
//   }

//   posts[index] = updatedPost;
//   await writePosts(posts);

//   return NextResponse.json(updatedPost);
// }

// export async function DELETE(req: Request) {
//   const { id } = await req.json();
//   const posts = await readPosts();

//   const filtered = posts.filter((p: any) => p.id !== id);
//   await writePosts(filtered);

//   return NextResponse.json({ message: "Post deleted" });
// }





// import { NextResponse } from "next/server";
// import fs from "fs/promises";
// import path from "path";

// // path to file
// const filePath = path.join(process.cwd(), "mock", "posts.json");

// // reading file
// async function readPosts() {
//   const data = await fs.readFile(filePath, "utf-8");
//   return JSON.parse(data);
// }

// // writting in file
// async function writePosts(posts: any[]) {
//   await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
// }

// export async function GET() {
//   const posts = await readPosts();
//   return NextResponse.json(posts);
// }

// export async function POST(req: Request) {
//   const newPost = await req.json();
//   const posts = await readPosts();

//   const id = Date.now(); // or uuid
//   const createdPost = { id, ...newPost };

//   posts.push(createdPost);
//   await writePosts(posts);

//   return NextResponse.json(createdPost, { status: 201 });
// }

// export async function PUT(req: Request) {
//   const updatedPost = await req.json();
//   const posts = await readPosts();

//   const index = posts.findIndex((p: any) => p.id === updatedPost.id);
//   if (index === -1) {
//     return NextResponse.json({ message: "Post not found" }, { status: 404 });
//   }

//   posts[index] = updatedPost;
//   await writePosts(posts);

//   return NextResponse.json(updatedPost);
// }

// export async function DELETE(req: Request) {
//   const { id } = await req.json();
//   const posts = await readPosts();

//   const filtered = posts.filter((p: any) => p.id !== id);
//   await writePosts(filtered);

//   return NextResponse.json({ message: "Post deleted" });
// }
