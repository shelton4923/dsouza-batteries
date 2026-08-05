'use client';
import Link from 'next/link';

export default function InverterBatteries() {
  return (
    <main className="min-h-screen bg-white p-8">
      <Link href="/" className="text-blue-900 font-bold underline mb-8 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-8 text-blue-900">Inverter & UPS</h1>
      <p className="text-gray-600">Coming soon: Our full range of Inverter Batteries.</p>
    </main>
  );
}