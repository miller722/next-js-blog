"use client";
import { Suspense } from "react";
import PostSearch from "./PostSearch";

export default function PostSearchWrapper() {
  return (
    <Suspense fallback={<div>Loading serach...</div>}>
      <PostSearch />
    </Suspense>
  );
}
