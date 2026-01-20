import Image from "next/image";

export default function page() {
  return (
    <>
        <div className="glass rounded-2xl overflow-hidden max-w-sm w-full shadow-2xl transition-all duration-300 hover:scale-104">
        <div className="relative h-48 overflow-hidden">
            <Image 
                src="" 
                alt="Mountain landscape" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-3">
                Mountain Adventure
            </h2>
            
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Explore the breathtaking beauty of nature&#39;s peaks. Experience the thrill of adventure and discover serene landscapes that will take your breath away.
            </p>
            
            <button className="glass w-full py-3 px-4 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300">
                Learn More
            </button>
        </div>
    </div>
    </>
  )
}
