import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 400">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#eef2ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#grad)" />
          <g fill="#e0e7ff">
            <circle cx="50" cy="350" r="120" />
            <circle cx="700" cy="-10" r="120" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 sm:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-slate-200 px-3 py-1 text-xs font-medium text-slate-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Summer'25 Collection just dropped
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Wear the vibe. Own the day.
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Discover premium basics, bold graphics, and sustainable fits crafted for everyday comfort.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#new" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 transition">
                Shop New Arrivals <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#sale" className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-5 py-3 text-white font-semibold hover:bg-slate-900 transition">
                Explore Sale
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div>Free shipping over $50</div>
              <div>Easy 14-day returns</div>
              <div>Made with love</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop"
                alt="Model wearing stylish outfit"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg ring-1 ring-slate-200 p-4 hidden sm:flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1470&auto=format&fit=crop"
                alt="Product"
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <div className="text-sm font-semibold">Organic Cotton Tee</div>
                <div className="text-xs text-slate-500">Trending now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
