"use client";
import {
  ArrowRight,
  Code,
  GitBranch,
  Layers,
  Sandwich,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("parallel");
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                <Code className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Next.js Routing
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <a
                href="#docs"
                className="text-white/70 hover:text-white transition-colors"
              >
                Docs
              </a>
              <a
                href="#examples"
                className="text-white/70 hover:text-white transition-colors"
              >
                Examples
              </a>
              <a
                href="#community"
                className="text-white/70 hover:text-white transition-colors"
              >
                Community
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 hover:bg-white/15 transition-all">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">Advanced Routing Patterns</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Master Next.js
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Routing Architecture
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
              Unlock powerful routing patterns with Parallel and Intercepting
              Routes. Build sophisticated layouts and seamless user experiences
              with Next.js App Router.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                View Examples
              </button>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveTab("parallel")}
              className={`px-6 py-3 backdrop-blur-md rounded-xl border transition-all flex items-center gap-2 ${
                activeTab === "parallel"
                  ? "bg-white/25 border-white/40 shadow-lg"
                  : "bg-white/10 border-white/20 hover:bg-white/15"
              }`}
            >
              <GitBranch className="w-5 h-5" />
              Parallel Routes
            </button>
            <button
              onClick={() => setActiveTab("intercepting")}
              className={`px-6 py-3 backdrop-blur-md rounded-xl border transition-all flex items-center gap-2 ${
                activeTab === "intercepting"
                  ? "bg-white/25 border-white/40 shadow-lg"
                  : "bg-white/10 border-white/20 hover:bg-white/15"
              }`}
            >
              <Sandwich className="w-5 h-5" />
              Intercepting Routes
            </button>
          </div>

          {/* Content Cards */}
          {activeTab === "parallel" && (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  What are Parallel Routes?
                </h3>
                <p className="text-white/70 mb-6">
                  Parallel Routes allow you to simultaneously render multiple
                  pages in the same layout. Perfect for dashboards with
                  independent sections, modal dialogs, or complex UI patterns
                  that need to maintain separate navigation states.
                </p>
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">app/</div>
                  <div className="ml-4 text-blue-300">@analytics/</div>
                  <div className="ml-4 text-blue-300">@team/</div>
                  <div className="ml-4 text-purple-300">layout.tsx</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="w-12 h-12 bg-linear-to-br from-pink-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                    <span>
                      Render multiple pages simultaneously in the same view
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <span>
                      Independent navigation and error handling per slot
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2"></div>
                    <span>
                      Conditional rendering based on authentication or context
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                    <span>
                      Perfect for complex dashboard layouts and split views
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "intercepting" && (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Sandwich className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  What are Intercepting Routes?
                </h3>
                <p className="text-white/70 mb-6">
                  Intercepting Routes allow you to load a route within the
                  current layout while keeping the context of the current page.
                  When a user navigates to the route from elsewhere, the route
                  renders in its full page context instead.
                </p>
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">app/</div>
                  <div className="ml-4 text-blue-300">feed/</div>
                  <div className="ml-4 text-blue-300">(..)photo/[id]/</div>
                  <div className="ml-8 text-purple-300">page.tsx</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Common Use Cases</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                    <span>
                      Modal dialogs for photo galleries or product details
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                    <span>
                      Login modals that maintain the current page context
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                    <span>
                      Shopping cart overlays without leaving the browse page
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                    <span>Share sheets and quick action panels</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Code Example Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-300" />
              {activeTab === "parallel"
                ? "Parallel Routes Example"
                : "Intercepting Routes Example"}
            </h3>

            {activeTab === "parallel" ? (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-white/60 mb-3">
                    Layout Structure
                  </h4>
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 font-mono text-sm">
                    <pre className="text-green-300">{`export default function Layout({
  children,
  team,
  analytics,
}) {
  return (
    <div>
      {children}
      <div className="grid">
        {team}
        {analytics}
      </div>
    </div>
  )
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white/60 mb-3">
                    Folder Convention
                  </h4>
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 font-mono text-sm text-white/80">
                    <div className="mb-2">📁 app/dashboard/</div>
                    <div className="ml-4 mb-1">📁 @team/</div>
                    <div className="ml-8 text-blue-300">page.tsx</div>
                    <div className="ml-4 mb-1">📁 @analytics/</div>
                    <div className="ml-8 text-blue-300">page.tsx</div>
                    <div className="ml-4 text-purple-300">layout.tsx</div>
                    <div className="ml-4 text-green-300">page.tsx</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-white/60 mb-3">
                    Modal Component
                  </h4>
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 font-mono text-sm">
                    <pre className="text-green-300">{`export default function PhotoModal({
  params
}) {
  return (
    <dialog className="modal">
      <Photo id={params.id} />
      <button>Close</button>
    </dialog>
  )
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white/60 mb-3">
                    Route Convention
                  </h4>
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 font-mono text-sm text-white/80">
                    <div className="mb-2">📁 app/</div>
                    <div className="ml-4 mb-1">📁 feed/</div>
                    <div className="ml-8 text-blue-300">page.tsx</div>
                    <div className="ml-4 mb-1">📁 (..)photo/[id]/</div>
                    <div className="ml-8 text-purple-300">page.tsx</div>
                    <div className="ml-4 mb-1">📁 photo/[id]/</div>
                    <div className="ml-8 text-green-300">page.tsx</div>
                    <div className="mt-3 text-xs text-white/50">
                      (..) = intercept one level up
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 max-w-7xl mx-auto px-8 py-12 mt-16 border-t border-white/10">
          <div className="text-center text-white/50">
            <p>Built with Next.js App Router • Styled with Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </>
  );
}
