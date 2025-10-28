import { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="text-xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Clothr</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-gray-900">New</a>
            <a href="#" className="hover:text-gray-900">Men</a>
            <a href="#" className="hover:text-gray-900">Women</a>
            <a href="#" className="hover:text-gray-900">Accessories</a>
            <a href="#" className="hover:text-gray-900">Sale</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-600 focus-within:ring-2 focus-within:ring-gray-300">
              <Search className="h-4 w-4" />
              <input
                type="text"
                placeholder="Search products"
                className="ml-2 bg-transparent outline-none placeholder:text-gray-500 w-44"
              />
            </div>
            <button className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-700" />
            </button>
            <button className="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute -right-0 -top-0 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gray-900 px-1.5 text-xs font-semibold text-white">2</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 py-4">
              <span className="text-lg font-bold">Menu</span>
              <button className="rounded-md p-2 hover:bg-gray-100" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              <a href="#" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">New</a>
              <a href="#" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Men</a>
              <a href="#" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Women</a>
              <a href="#" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Accessories</a>
              <a href="#" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Sale</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
