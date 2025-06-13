"use client";
import { Suspense } from "react";
import PostSearch from "./PostSearch";

export default function PostSearchWrapper() {
  return (
    <Suspense fallback={<div>Завантаження пошуку...</div>}>
      <PostSearch />
    </Suspense>
  );
}
