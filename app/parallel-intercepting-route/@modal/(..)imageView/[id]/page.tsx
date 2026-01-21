import { cardData } from "@/utils/data/cardData";
import { MoveDiagonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const post = cardData.find((item) => item.id === parseInt(params.id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-700 mt-6">
            Data not found
          </h2>
          <Link href="/parallel-intercepting-route#cardView">
            <h3 className="md:text-2xl text-2xl text-center backdrop-blur-md bg-white/25 text-white font-semibold px-6 py-3 rounded-full border border-white/40 shadow-xl hover:shadow-2xl md:mx-30 lg:mx-80 mx-10">
              Return
            </h3>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <MoveDiagonal>
        <Image
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
          width={400}
          height={200}
        />
        <button
          onClick={() => window.history.back()}
          className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full border border-white/20 transition-all duration-300 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Gallery
        </button>
      </MoveDiagonal>
    </>
  );
}
