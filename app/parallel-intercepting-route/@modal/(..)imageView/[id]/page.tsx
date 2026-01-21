"use client";

import { cardData } from "@/utils/data/cardData";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function ImageViewModalPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const id = Number(params?.id);
  if (!params?.id || Number.isNaN(id)) return null;

  const post = cardData.find((item) => item.id === id);
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onClick={() => router.back()} // close when clicking backdrop
    >
      <div
        className="relative w-full max-w-5xl backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking modal content
      >
        {/* Close button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 z-10 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/20 transition"
        >
          Close
        </button>

        {/* Your UI (reuse your design) */}
        <div className="relative h-[70vh] overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            width={1000}
            height={400}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-0 w-full p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-white/90 text-lg max-w-3xl">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
