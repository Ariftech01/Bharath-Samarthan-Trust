import React from 'react';
import { SectionHeader, Card } from '../components/Shared';

export default function About() {
  return (
    <div>
      <div className="bg-primary-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Bharath Samarthan Trust</h1>
        <p className="text-primary-200 max-w-2xl mx-auto text-lg">
          Dedicated to building a society where justice, education, and opportunity are accessible to every Indian citizen.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              To empower the marginalized sections of society through free legal aid, quality education, and skill development. We strive to bridge the gap between resources and those in need, ensuring dignity and self-reliance for all.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              A just, equitable, and enlightened India where every individual has the power to shape their own destiny, free from the shackles of poverty and ignorance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/300/400?random=20" className="rounded-xl shadow-lg mt-8" alt="About 1" />
             <img src="https://picsum.photos/300/400?random=21" className="rounded-xl shadow-lg mb-8" alt="About 2" />
          </div>
        </div>

        <SectionHeader title="Our Core Values" centered />
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { t: 'Integrity', d: 'Transparency in every rupee raised and spent.' },
            { t: 'Compassion', d: 'Serving with empathy and kindness.' },
            { t: 'Justice', d: 'Fighting for the rights of the voiceless.' },
            { t: 'Empowerment', d: 'Helping people help themselves.' }
          ].map((v, i) => (
            <Card key={i} className="p-6 hover:-translate-y-1 transition-transform">
              <h3 className="font-bold text-lg mb-2 text-primary-700">{v.t}</h3>
              <p className="text-sm text-slate-600">{v.d}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}