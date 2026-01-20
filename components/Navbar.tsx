import { Code } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className=" text-white overflow-hidden">
        <nav className="relative z-10 px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                  <Code className="w-6 h-6 text-blue-300" />
                </div>
                <span className="text-xl font-bold bg-linear-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Next.js Routing
                </span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
