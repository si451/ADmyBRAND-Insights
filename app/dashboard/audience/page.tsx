'use client';

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const genderData = [
  { name: 'Male', value: 6200 },
  { name: 'Female', value: 4800 },
];
const COLORS = ['#3b82f6', '#f472b6'];
const maleVsFemaleData = [
  { name: 'Conversions', Male: 6200, Female: 4800 },
];

export default function AudiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <h2 className="text-3xl font-extrabold font-orbitron mb-4 tracking-tight">Audience</h2>
              <p className="text-lg text-foreground font-medium mb-8 leading-relaxed">Analyze and segment your audience for better targeting.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-orbitron text-lg">Gender Conversions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={genderData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                        {genderData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => value.toLocaleString()} />
                      <Legend iconType="circle" />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-orbitron text-lg">Male vs Female Conversions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={maleVsFemaleData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => value.toLocaleString()} />
                      <Legend />
                      <Bar dataKey="Male" fill="#3b82f6" />
                      <Bar dataKey="Female" fill="#f472b6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
} 