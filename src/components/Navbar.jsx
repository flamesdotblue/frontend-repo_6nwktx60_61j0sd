import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="inline-flex items-baseline gap-1">
              <span className="text-2xl font-extrabold tracking-tight">Vogue</span>
              <span className="text-2xl font-extrabold tracking-tight text-indigo-600">X</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#new" className="hover:text-indigo-600 transition-colors">New Arrivals</a>
            <a href="#men" className="hover:text-indigo-600 transition-colors">Men</a>
            <a href="#women" className="hover:text-indigo-600 transition-colors">Women</a>
            <a href="#accessories" className="hover:text-indigo-600 transition-colors">Accessories</a>
            <a href="#sale" className="text-rose-600">Sale</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search products"
                className="bg-transparent focus:outline-none placeholder:text-slate-400 text-sm w-40"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-slate-100" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 rounded-lg hover:bg-slate-100" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-indigo-600 text-white text-xs grid place-items-center">2</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              <a href="#new" className="px-2 py-2 rounded hover:bg-slate-100">New Arrivals</a>
              <a href="#men" className="px-2 py-2 rounded hover:bg-slate-100">Men</a>
              <a href="#women" className="px-2 py-2 rounded hover:bg-slate-100">Women</a>
              <a href="#accessories" className="px-2 py-2 rounded hover:bg-slate-100">Accessories</a>
              <a href="#sale" className="px-2 py-2 rounded text-rose-600">Sale</a>
              <div className="flex items-center gap-2 px-2 py-2 rounded bg-slate-100 mt-2">
                <Search className="h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search products"
                  className="bg-transparent focus:outline-none placeholder:text-slate-400 text-sm w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
