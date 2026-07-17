import Image from 'next/image';

export default function Home() {
  const phoneNumber = "7066021476";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const callLink = `tel:+91${phoneNumber}`;

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 bg-blue-800 text-white p-4 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight">Dsouza Batteries</h1>
          <a href={callLink} className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-400">
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Powering Your Journey</h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Reliable Car, Bike, and Inverter batteries in Morjim, Goa. Doorstep delivery & professional installation.
        </p>
        <a href={callLink} className="bg-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 shadow-lg transition">
          Call Now: +91 {phoneNumber}
        </a>
      </header>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Car Batteries", desc: "Premium batteries for all major car brands with on-site replacement." },
            { title: "Bike Batteries", desc: "High-performance, long-lasting batteries for your two-wheeler." },
            { title: "Inverter & UPS", desc: "Stay powered during outages with our high-capacity home setups." }
          ].map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-blue-700">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Our Shop</h2>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705.0007160745122!2d73.73739152603088!3d15.632491388931813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe90d11c08d97%3A0xbed862214f784148!2sDsouza%20batteries.%20Morjim%2C%20Pernem%2C%20Goa%2C%20India.!5e0!3m2!1sen!2sin!4v1784210211226!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>© 2026 Dsouza Batteries. Your local power partner in Goa.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 flex items-center gap-2"
      >
        <span className="text-xl">💬</span>
        <span className="font-bold hidden md:block">Chat with us</span>
      </a>
    </main>
  );
}