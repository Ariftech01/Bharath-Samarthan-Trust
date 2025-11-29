import React, { useState } from 'react';
import { SectionHeader, Button, Input, Card, Badge, Toast } from '../components/Shared';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Donate() {
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Story & Trust */}
          <div>
            <SectionHeader 
              title="Make a Difference Today" 
              subtitle="Your contribution directly supports legal aid for the poor and education for rural children." 
            />
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <ShieldCheck className="text-green-600" /> Safe & Secure Donation
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                We use industry-standard encryption to protect your financial information. 
                Bharath Samarthan Trust is a registered non-profit.
              </p>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>80G Tax Exemption Certificate available.</li>
                <li>Quarterly impact reports sent to all donors.</li>
                <li>100% transparency in fund utilization.</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/400/300?random=10" className="rounded-lg shadow" alt="Kids" />
              <img src="https://picsum.photos/400/300?random=11" className="rounded-lg shadow" alt="Legal Aid" />
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div>
            <Card className="p-8 shadow-xl border-t-4 border-t-accent-500">
              <form onSubmit={handleDonate}>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Donation Frequency</label>
                  <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setFrequency('once')}
                      className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${frequency === 'once' ? 'bg-white text-primary-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Give Once
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${frequency === 'monthly' ? 'bg-white text-primary-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Monthly <span className="text-xs text-accent-500 font-bold ml-1">♥ Most Impactful</span>
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Select Amount (INR)</label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {predefinedAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => { setAmount(amt); setCustomAmount(''); }}
                        className={`py-2 px-4 rounded border text-sm font-semibold transition-colors ${amount === amt && !customAmount ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-slate-200 hover:border-primary-300'}`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                  <Input 
                    placeholder="Custom Amount" 
                    type="number"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setAmount(Number(e.target.value)); }}
                    className="mt-2"
                  />
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 border-b pb-2">Your Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" required />
                    <Input placeholder="Last Name" required />
                  </div>
                  <Input type="email" placeholder="Email Address" required />
                  <Input type="tel" placeholder="Phone Number" />
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" id="updates" className="rounded border-slate-300" />
                    <label htmlFor="updates">Keep me updated on my impact.</label>
                  </div>
                </div>

                <Button type="submit" variant="secondary" size="lg" className="w-full font-bold text-lg" isLoading={isSubmitting}>
                  Donate ₹{amount} {frequency === 'monthly' ? '/ month' : ''}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      {showToast && <Toast type="success" message="Thank you for your generosity! Receipt sent to email." onClose={() => setShowToast(false)} />}
    </div>
  );
}