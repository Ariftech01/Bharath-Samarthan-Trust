import React from 'react';
import { SectionHeader, Card, Button, Badge } from '../components/Shared';
import { Link } from 'react-router-dom';

const allCauses = [
    { id: 1, title: "Legal Aid for Rural Women", cat: "Legal", desc: "Providing free legal counsel to women fighting property disputes.", raised: 75, goal: 100000, img: 3 },
    { id: 2, title: "Digital Literacy for Kids", cat: "Education", desc: "Setting up computer labs in government schools.", raised: 40, goal: 500000, img: 4 },
    { id: 3, title: "Senior Citizen Health Camps", cat: "Health", desc: "Health checkups and medicine for abandoned elderly.", raised: 90, goal: 150000, img: 5 },
    { id: 4, title: "Scholarships for Merit Students", cat: "Education", desc: "Funding college fees for bright underprivileged students.", raised: 20, goal: 1000000, img: 6 },
    { id: 5, title: "Clean Water Initiative", cat: "Community", desc: "Installing RO plants in drought-hit villages.", raised: 55, goal: 300000, img: 7 },
];

export default function Causes() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Our Causes" subtitle="Browse through our active campaigns and choose where to make an impact." />
      
      {/* Filters (Visual only for now) */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['All', 'Legal Aid', 'Education', 'Health', 'Community'].map((f, i) => (
          <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium ${i === 0 ? 'bg-primary-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allCauses.map((c) => (
          <Card key={c.id} className="flex flex-col">
            <div className="relative h-56">
               <img src={`https://picsum.photos/600/400?random=${c.img}`} alt={c.title} className="w-full h-full object-cover" />
               <div className="absolute top-4 right-4">
                 <Badge color="blue">{c.cat}</Badge>
               </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{c.title}</h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">{c.desc}</p>
              
              <div className="mb-4 text-sm">
                <div className="flex justify-between font-semibold mb-1 text-slate-700">
                  <span>₹{c.raised/100 * c.goal} raised</span>
                  <span>Goal: ₹{c.goal}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: `${c.raised}%` }}></div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-auto">
                 <Link to="/donate" className="flex-1">
                   <Button className="w-full">Donate</Button>
                 </Link>
                 <Button variant="outline">Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}