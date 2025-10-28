import { Star, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Oversized Graphic Tee',
    price: 24.99,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1520975922284-5f5738d1b9cd?q=80&w=1887&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 2,
    title: 'Classic Denim Jacket',
    price: 59.0,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1887&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 3,
    title: 'Cozy Fleece Hoodie',
    price: 39.5,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1520971347561-4f6b1c4a3c56?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Essential Joggers',
    price: 34.99,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1932&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Cropped Top',
    price: 22.0,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1483987117153-1eea5226f9d6?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Linen Shirt',
    price: 44.0,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1618354691217-5665c5b2714c?q=80&w=1974&auto=format&fit=crop',
    tag: 'Limited',
  },
  {
    id: 7,
    title: 'Athletic Shorts',
    price: 26.0,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1593030668930-8130ab0f2d9b?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Everyday Sneakers',
    price: 69.0,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1974&auto=format&fit=crop',
    tag: 'New',
  },
];

function Rating({ value }) {
  const stars = Math.round(value);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`}
        />
      ))}
      <span className="ml-1 text-xs text-slate-500">{value.toFixed(1)}</span>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="new" className="py-14 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Picks</h2>
            <p className="text-slate-600">Curated styles loved by our community</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-sm font-semibold text-indigo-600 hover:underline">View all</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p) => (
            <article key={p.id} className="group relative rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200">
              <div className="relative aspect-square overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {p.tag && (
                  <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-slate-200">
                    {p.tag}
                  </span>
                )}
                <button
                  className="absolute right-2 top-2 grid place-items-center h-8 w-8 rounded-full bg-white/90 ring-1 ring-slate-200 text-slate-700 hover:text-rose-500 transition"
                  aria-label="Wishlist"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-1">{p.title}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <Rating value={p.rating} />
                  <div className="text-sm sm:text-base font-bold">${p.price.toFixed(2)}</div>
                </div>
                <button className="mt-3 w-full rounded-xl bg-slate-900 text-white py-2 text-sm font-semibold hover:bg-slate-800 transition">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
