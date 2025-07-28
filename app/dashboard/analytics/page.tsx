'use client';

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { RevenueChart } from "@/components/dashboard/charts/revenue-chart";
import { ConversionChart } from "@/components/dashboard/charts/conversion-chart";
import { motion } from "framer-motion";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <h2 className="text-3xl font-extrabold font-orbitron mb-4 tracking-tight">Analytics</h2>
              <p className="text-lg text-foreground font-medium mb-8 leading-relaxed">Deep dive into your analytics and performance metrics.</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <ConversionChart />
            </div>
            <div className="mt-8">
              <div className="rounded-lg border border-primary/20 p-6 glass-card">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">More analytics widgets and insights will appear here.</p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
} 