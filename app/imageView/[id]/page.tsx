import { cardData } from "@/utils/data/cardData";
import Image from "next/image";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = cardData.find((item) => item.id === parseInt(id));

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
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
          <div className="max-w-5xl w-full">
            {/* Glassmorphism Card */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Image Section */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  width={1000}
                  height={400}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute top-6 right-6 backdrop-blur-md bg-white/20 px-4 py-2 rounded-full border border-white/30">
                  <span className="text-white text-sm font-medium">
                    ID: {post.id}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12">
                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  {post.title}
                </h1>

                {/* Description Card */}
                <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 mb-8">
                  <p className="text-white/90 text-lg leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="backdrop-blur-md bg-white/10 rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-white/70 text-sm mb-1">Category</div>
                    <div className="text-white text-xl font-semibold">
                      Nature
                    </div>
                  </div>

                  <div className="backdrop-blur-md bg-white/10 rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-white/70 text-sm mb-1">Location</div>
                    <div className="text-white text-xl font-semibold">
                      Alpine
                    </div>
                  </div>

                  <div className="backdrop-blur-md bg-white/10 rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-white/70 text-sm mb-1">Season</div>
                    <div className="text-white text-xl font-semibold">
                      Winter
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="backdrop-blur-md bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    View Gallery
                  </button>

                  <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/20 transition-all duration-300 hover:scale-105">
                    Share
                  </button>

                  <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/20 transition-all duration-300 hover:scale-105">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 flex justify-center">
              <Link href="/parallel-intercepting-route#cardView">
                <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full border border-white/20 transition-all duration-300 flex items-center gap-2 cursor-pointer">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
