'use client';
import Link from 'next/link';

export default function CarBatteries() {
  return (
    <main className="min-h-screen bg-white p-8">
      <Link href="/" className="text-blue-900 font-bold underline mb-8 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-8 text-blue-900">Car Batteries</h1>
      <p>Content for car batteries goes here.</p>
    </main>
  );
}