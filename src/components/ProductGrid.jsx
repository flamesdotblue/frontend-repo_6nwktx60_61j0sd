import { Star, Heart, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Everyday Tee',
    price: 28,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Relaxed Hoodie',
    price: 58,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Pleated Trousers',
    price: 72,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1519235106638-30cc49b5dbc1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Minimal Sneakers',
    price: 95,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Overshirt',
    price: 64,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Textured Knit',
    price: 54,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Classic Denim',
    price: 68,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Tailored Coat',
    price: 120,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
  },
];

function Stars({ rating }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < full ? 'fill-current' : half && i === full ? 'fill-current/50' : 'opacity-30'}`} />
      ))}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Featured products</h2>
          <p className="mt-1 text-gray-600">Carefully curated pieces to refresh your wardrobe.</p>
        </div>
        <a href="#" className="hidden sm:inline text-sm font-semibold text-gray-900 hover:underline">View all</a>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <article key={product.id} className="group rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md">
            <div className="relative overflow-hidden rounded-xl">
              {product.tag && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow">{product.tag}</span>
              )}
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="aspect-square w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
              />
              <button
                className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-700 shadow hover:bg-white"
                aria-label="Add to wishlist"
              >
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
                <p className="text-sm font-semibold text-gray-900">${product.price.toFixed(0)}</p>
              </div>
              <div className="flex items-center justify-between">
                <Stars rating={product.rating} />
                <button className="inline-flex items-center gap-1 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800">
                  <ShoppingCart className="h-3.5 w-3.5" />
                  Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
