import React, { useState } from 'react';
import { SectionHeader, Button, Input, Card, Badge, Modal, Toast } from '../components/Shared';
import { Scale, FileText, CheckCircle, Search } from 'lucide-react';

const steps = [
  { title: "Submit Request", desc: "Fill out the confidential form below with case details." },
  { title: "Case Review", desc: "Our legal panel reviews your eligibility and case merit." },
  { title: "Legal Action", desc: "We assign a pro-bono lawyer to represent or guide you." }
];

export default function Legal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowToast(true);
  };

  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
            <Scale className="text-primary-700 h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Access to Justice for All</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            We believe financial status should not determine justice. Our pro-bono legal aid cell helps the marginalized fight for their rights.
          </p>
          <Button onClick={() => setIsModalOpen(true)} size="lg">Request Legal Aid</Button>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader title="How It Works" centered />
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center p-6 border rounded-xl bg-white shadow-sm relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resources / Downloads */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
             <h2 className="text-2xl font-bold">Legal Resources & Templates</h2>
             <div className="relative mt-4 md:mt-0 w-full md:w-64">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
               <input type="text" placeholder="Search documents..." className="pl-10 pr-4 py-2 w-full rounded-md border border-slate-300 focus:ring-primary-500 focus:outline-none" />
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['RTI Application Draft', 'Domestic Violence Complaint', 'Property Dispute Basics', 'Consumer Court Affidavit'].map((doc, i) => (
              <Card key={i} className="p-4 flex justify-between items-center hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <FileText className="text-primary-600" />
                  <span className="font-medium text-slate-800">{doc}</span>
                </div>
                <Button variant="ghost" size="sm">Download</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Submit Legal Aid Request">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Full Name" placeholder="Enter your name" required />
          <Input label="Phone Number" placeholder="Enter phone number" required />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Case Type</label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Property Dispute</option>
              <option>Family / Domestic</option>
              <option>Employment / Labor</option>
              <option>Criminal Defense</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Case Description</label>
            <textarea rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Briefly describe your issue..." required></textarea>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" required />
            <span className="text-xs text-slate-600">I certify that I cannot afford private legal counsel.</span>
          </div>
          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </Modal>
      
      {showToast && <Toast type="success" message="Application submitted. We will contact you within 48 hours." onClose={() => setShowToast(false)} />}
    </div>
  );
}