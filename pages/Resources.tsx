import React, { useState } from 'react';
import { SectionHeader, Card, Button } from '../components/Shared';
import { BookOpen, Video, Users, Download } from 'lucide-react';

export default function Resources() {
  const [activeTab, setActiveTab] = useState<'ebooks' | 'videos'>('ebooks');

  const ebooks = [
    { title: "Legal Rights 101", desc: "A guide for every citizen.", size: "2.4 MB" },
    { title: "Financial Literacy", desc: "Managing savings and loans.", size: "1.8 MB" },
    { title: "RTI Handbook", desc: "How to file an RTI application.", size: "3.1 MB" },
  ];

  const videos = [
    { title: "Constitution Day Lecture", desc: "Understanding the Preamble.", time: "45 min" },
    { title: "Career Guidance Workshop", desc: "For Class 10 & 12 students.", time: "1 hr 20 min" },
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Knowledge Hub" subtitle="Empowering you with information." />

      <div className="flex border-b border-slate-200 mb-8">
        <button
          onClick={() => setActiveTab('ebooks')}
          className={`pb-4 px-6 font-medium text-sm transition-colors border-b-2 ${activeTab === 'ebooks' ? 'border-primary-500 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <div className="flex items-center gap-2"><BookOpen size={16} /> E-Books & Guides</div>
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`pb-4 px-6 font-medium text-sm transition-colors border-b-2 ${activeTab === 'videos' ? 'border-primary-500 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <div className="flex items-center gap-2"><Video size={16} /> Video Lectures</div>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {activeTab === 'ebooks' && ebooks.map((item, i) => (
          <Card key={i} className="p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="text-orange-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
            <Button variant="outline" size="sm" className="w-full gap-2">
              <Download size={14} /> Download ({item.size})
            </Button>
          </Card>
        ))}

        {activeTab === 'videos' && videos.map((item, i) => (
          <Card key={i} className="overflow-hidden">
             <div className="bg-slate-800 h-40 flex items-center justify-center text-white">
               <Video size={40} className="opacity-50" />
             </div>
             <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm mb-2">{item.desc}</p>
              <span className="text-xs font-semibold text-slate-400">{item.time}</span>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
}