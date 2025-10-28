export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-extrabold">Vogue<span className="text-indigo-600">X</span></div>
            <p className="mt-2 text-sm text-slate-600 max-w-xs">
              Your daily dose of effortless style. Premium fabrics, sharp fits, no compromises.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900 mb-3">Shop</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#men" className="hover:text-slate-900">Men</a></li>
              <li><a href="#women" className="hover:text-slate-900">Women</a></li>
              <li><a href="#accessories" className="hover:text-slate-900">Accessories</a></li>
              <li><a href="#sale" className="hover:text-slate-900">Sale</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900 mb-3">Company</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900 mb-3">Stay in the loop</div>
            <form className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
                Join
              </button>
            </form>
            <p className="mt-2 text-xs text-slate-500">Get updates on drops and exclusive deals.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VogueX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
