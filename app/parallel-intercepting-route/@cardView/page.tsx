import { cardData } from "@/utils/data/cardData";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <h3
        id="cardView"
        className="md:text-4xl text-2xl text-center backdrop-blur-md bg-white/25 text-white font-semibold px-8 py-4 rounded-full border border-white/40 shadow-xl hover:shadow-2xl md:mx-30 lg:mx-80 mx-10"
      >
        Card View
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {cardData.map((card) => (
          <Link href={`/imageView/${card.id}`} key={card.id}>
            <div
              key={card.id}
              className="glass rounded-2xl overflow-hidden max-w-sm w-full shadow-2xl transition-all duration-300 hover:scale-104"
            >
              <div className="relative h-48 overflow-hidden cursor-pointer">
                <Link href={`/imageView/${card.id}`}>
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={200}
                  />
                </Link>
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3 cursor-pointer">
                  {card.title}
                </h2>

                <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-1">
                  {card.description}
                </p>

                <button className="glass w-full py-3 px-4 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
