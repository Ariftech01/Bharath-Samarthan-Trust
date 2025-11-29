import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, Button } from '../components/Shared';

const data = [
  { name: 'Mon', donations: 4000 },
  { name: 'Tue', donations: 3000 },
  { name: 'Wed', donations: 2000 },
  { name: 'Thu', donations: 2780 },
  { name: 'Fri', donations: 1890 },
  { name: 'Sat', donations: 6390 },
  { name: 'Sun', donations: 3490 },
];

export default function Admin() {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar Placeholder */}
      <div className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
        <ul className="space-y-4 text-slate-300 text-sm">
          <li className="text-white font-medium">Dashboard</li>
          <li>Donations</li>
          <li>Volunteers</li>
          <li>Legal Cases</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
          <Button size="sm" variant="outline">Logout</Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <p className="text-xs text-slate-500 uppercase">Total Donations</p>
            <p className="text-2xl font-bold text-slate-900">₹ 12,45,000</p>
          </Card>
           <Card className="p-6">
            <p className="text-xs text-slate-500 uppercase">Active Volunteers</p>
            <p className="text-2xl font-bold text-slate-900">452</p>
          </Card>
           <Card className="p-6">
            <p className="text-xs text-slate-500 uppercase">Pending Legal Cases</p>
            <p className="text-2xl font-bold text-amber-600">38</p>
          </Card>
           <Card className="p-6">
            <p className="text-xs text-slate-500 uppercase">New Messages</p>
            <p className="text-2xl font-bold text-slate-900">12</p>
          </Card>
        </div>

        {/* Chart */}
        <Card className="p-6 h-96 mb-8">
          <h3 className="font-bold text-slate-700 mb-4">Donation Trends (This Week)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="donations" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}