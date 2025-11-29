import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Gavel, BookOpen, Heart, DollarSign, GraduationCap } from 'lucide-react';
import { Button, Card, SectionHeader } from '../components/Shared';

const Hero = () => (
  <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white py-20 lg:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Empowering India,<br/> <span className="text-accent-500">One Life at a Time.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg mx-auto md:mx-0">
          We provide free legal aid, educational resources, and social support to building a self-reliant and just society.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link to="/donate">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">Donate Now</Button>
          </Link>
          <Link to="/causes">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white">Explore Causes</Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-400 opacity-80">
          Join 5,000+ supporters making a difference today.
        </p>
      </div>
      <div className="flex-1 w-full max-w-lg">
        <div className="grid grid-cols-2 gap-4">
           <img src="https://picsum.photos/400/500?random=1" className="rounded-2xl shadow-2xl translate-y-8" alt="Impact 1" />
           <img src="https://picsum.photos/400/500?random=2" className="rounded-2xl shadow-2xl -translate-y-8" alt="Impact 2" />
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    { label: "Lives Impacted", value: "15,000+", icon: Heart },
    { label: "Legal Cases", value: "1,200+", icon: Gavel },
    { label: "Students Mentored", value: "3,500+", icon: GraduationCap },
    { label: "Volunteers", value: "450+", icon: Users },
  ];

  return (
    <section className="py-12 bg-white -mt-10 relative z-20 container mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-3 text-primary-600">
              <s.icon size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">{s.value}</h3>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const FeaturedCauses = () => {
  const causes = [
    { title: "Legal Aid for Rural Women", desc: "Providing free legal counsel to women fighting property and domestic disputes.", raised: 75, img: 3 },
    { title: "Digital Literacy for Kids", desc: "Setting up computer labs in government schools in Karnataka.", raised: 40, img: 4 },
    { title: "Senior Citizen Support", desc: "Health camps and legal assistance for abandoned elderly citizens.", raised: 90, img: 5 },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Key Causes" subtitle="Support the initiatives that matter most." centered />
        
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((c, i) => (
            <Card key={i} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={`https://picsum.photos/600/400?random=${c.img}`} alt={c.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">{c.desc}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Raised</span>
                    <span>{c.raised}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-accent-500 h-2 rounded-full" style={{ width: `${c.raised}%` }}></div>
                  </div>
                </div>
                <Link to={`/donate`}>
                   <Button variant="outline" className="w-full">Donate Now</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/causes">
            <Button variant="primary" className="gap-2">View All Causes <ArrowRight size={16} /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const VolunteerCTA = () => (
  <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/600?grayscale')] opacity-10 bg-cover bg-center"></div>
    <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the Change You Wish to See</h2>
      <p className="text-lg text-primary-100 mb-8">
        Join our community of over 450 volunteers. Whether you are a lawyer, teacher, or student, your skills can transform lives.
      </p>
      <Link to="/volunteer">
        <Button variant="secondary" size="lg">Become a Volunteer</Button>
      </Link>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCauses />
      <VolunteerCTA />
    </>
  );
}