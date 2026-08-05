'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function BikeBatteries() {
  const products = [
    { model: '4L Series', mrp: 1271, price: 950, exchange: 850, img: '/4l-series.jpg' },
    { model: '5L Series', mrp: 1592, price: 1200, exchange: 1100, img: '/5l-tall.jpg' },
    { model: '9R Series', mrp: 2255, price: 1800, exchange: 1600, img: '/9r-series.jpg' },
    { model: '14R Series', mrp: 3276, price: 2700, exchange: 2500, img: '/14r-series.jpg' },
  ];

  return (
    <main className="min-h-screen bg-white p-8">
      <Link href="/" className="text-blue-900 font-bold underline mb-8 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-8 text-blue-900">Bike Batteries</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => {
          const discountPercent = Math.round(((p.mrp - p.price) / p.mrp) * 100);
          return (
            <div key={i} className="border p-6 rounded-3xl shadow-sm bg-gray-50 flex flex-col hover:shadow-lg transition">
              
              {/* Image Section */}
              <div className="relative h-48 w-full mb-6 bg-white rounded-2xl overflow-hidden border">
                <Image 
                  src={p.img} 
                  alt={p.model} 
                  fill 
                  className="object-contain p-4" 
                />
              </div>

              {/* Model Name - Made larger and very clear */}
              <h3 className="text-2xl font-black text-blue-900 mb-4 bg-blue-100 py-2 px-4 rounded-lg inline-block">
                {p.model}
              </h3>
              
              {/* Pricing Section */}
              <div className="mb-4">
                <span className="text-gray-400 line-through text-sm">MRP ₹{p.mrp}</span>
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2 font-bold">{discountPercent}% OFF</span>
                <div className="text-4xl font-black text-blue-900 mt-1">₹{p.price}</div>
              </div>

              {/* Exchange Section */}
              <div className="bg-blue-900 p-4 rounded-xl mb-6 text-center">
                <p className="text-xs text-blue-200 font-bold uppercase tracking-wider">Exchange Price</p>
                <div className="text-3xl font-black text-white">₹{p.exchange}</div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href={`https://wa.me/917066021476?text=Hi, I am interested in the ${p.model}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-auto bg-green-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-md"
              >
                Buy on WhatsApp
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
}