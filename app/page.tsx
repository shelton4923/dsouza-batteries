import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const phoneNumber = "7066021476";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const callLink = `tel:+91${phoneNumber}`;

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 bg-blue-900 text-white p-4 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">Dsouza Batteries</h1>
          <a href={callLink} className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-400">Call Us</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-slate-50 py-20 px-6 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">Authorized Battery Dealer</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Genuine Amaron, Luminous, and Livguard batteries with professional shop-fitment.</p>
        <a href={callLink} className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition">Call for Availability</a>
      </header>

      {/* Logo Section */}
      <section className="py-12 bg-white">
        <h3 className="text-center text-gray-500 font-semibold mb-8 uppercase tracking-widest text-sm">Our Authorized Brands</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6">
          <div className="relative h-20 w-full"><Image src="/amaron.png" alt="Amaron" fill className="object-contain" /></div>
          <div className="relative h-20 w-full"><Image src="/livguard.png" alt="Livguard" fill className="object-contain" /></div>
          <div className="relative h-20 w-full"><Image src="/luminous.png" alt="Luminous" fill className="object-contain" /></div>
        </div>
      </section>

       <section className="py-16 px-6 max-w-6xl mx-auto bg-gray-50 rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Products & Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          <Link href="/car-batteries" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition block">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Car Batteries</h3>
            <p className="text-gray-600">Genuine Amaron range. Accurate testing and expert fitting at our shop.</p>
          </Link>

          <Link href="/bike-batteries" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition block">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Bike Batteries</h3>
            <p className="text-gray-600">Long-life Amaron batteries for all bikes. Quick replacement service.</p>
          </Link>

          <Link href="/inverter-batteries" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition block">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Inverters & UPS</h3>
            <p className="text-gray-600">Luminous & Livguard power solutions. Expert advice for your home backup.</p>
          </Link>

        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Visit Our Shop</h2>
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705.0007160745122!2d73.73739152603088!3d15.632491388931813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe90d11c08d97%3A0xbed862214f784148!2sDsouza%20batteries.%20Morjim%2C%20Pernem%2C%20Goa%2C%20India.!5e0!3m2!1sen!2sin!4v1784210211226!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-xl font-bold mb-4">Dsouza Batteries</h3>
          <p className="text-blue-200 mb-6">Authorized Dealer | Morjim, Goa</p>
          <div className="bg-blue-800 p-4 rounded-xl inline-block text-left">
            <p className="font-bold text-white mb-2 underline">Opening Hours:</p>
            <p className="text-blue-100">Mon - Sat: 9:00 AM – 1:00 PM & 3:00 PM – 7:30 PM</p>
            <p className="text-blue-100">Sunday: 9:00 AM – 1:00 PM</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 flex items-center gap-2">
        <span>💬</span><span className="font-bold hidden md:block">Inquire on WhatsApp</span>
      </a>
    </main>
  );
}