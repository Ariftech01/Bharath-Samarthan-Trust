import React from 'react';
import { SectionHeader, Button, Card, Badge, Input } from '../components/Shared';

const roles = [
  { title: "Legal Aid Volunteer", hours: "5-10 hrs/week", type: "Professional", desc: "Law students or lawyers needed to draft applications and counsel beneficiaries." },
  { title: "Education Mentor", hours: "3 hrs/weekend", type: "On-site", desc: "Teach English, Math, or Computer skills to children in our adopted communities." },
  { title: "Social Media Manager", hours: "Flexible", type: "Remote", desc: "Help us spread the word by creating content for Instagram and Twitter." },
];

export default function Volunteer() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Join Our Volunteer Force" subtitle="Donate your time and skills to build a better India." centered />

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Open Opportunities</h3>
          {roles.map((role, i) => (
            <Card key={i} className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-800">{role.title}</h4>
                <div className="flex gap-2 mt-2 mb-3">
                  <Badge color="blue">{role.hours}</Badge>
                  <Badge color="green">{role.type}</Badge>
                </div>
                <p className="text-slate-600 text-sm">{role.desc}</p>
              </div>
              <Button variant="outline" size="sm" className="whitespace-nowrap">Apply Now</Button>
            </Card>
          ))}
        </div>

        {/* Quick Form */}
        <div>
          <Card className="p-6 bg-primary-50 border-primary-100">
            <h3 className="text-lg font-bold text-primary-900 mb-4">General Registration</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Full Name" />
              <Input type="email" placeholder="Email Address" />
              <Input placeholder="City" />
              <Input placeholder="Your Skills (e.g., Teaching, Coding)" />
              <Button type="submit" className="w-full">Sign Up</Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}