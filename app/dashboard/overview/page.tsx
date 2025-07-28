'use client';

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { MetricCard } from "@/components/dashboard/metric-card";
import { RevenueChart } from "@/components/dashboard/charts/revenue-chart";
import { ChannelChart } from "@/components/dashboard/charts/channel-chart";
import { ConversionChart } from "@/components/dashboard/charts/conversion-chart";
import { DataTable } from "@/components/dashboard/data-table";
import { metrics, updateMetrics, MetricData } from "@/lib/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OverviewPage() {
  const [currentMetrics, setCurrentMetrics] = useState<MetricData[]>(metrics);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetrics(prev => updateMetrics(prev));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <h2 className="text-3xl font-extrabold font-orbitron mb-4 tracking-tight">Overview</h2>
              <p className="text-lg text-foreground font-medium mb-8 leading-relaxed">Here's a summary of your campaigns and analytics.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentMetrics.map((metric, index) => (
                <MetricCard key={metric.title} metric={metric} index={index} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <RevenueChart />
              <ChannelChart />
              <ConversionChart />
            </div>
            <DataTable />
            <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-12 text-center text-sm text-muted-foreground">
              <p>© 2024 ADmyBRAND Insights. Powered by AI Analytics.</p>
            </motion.footer>
          </motion.div>
        </main>
      </div>
    </div>
  );
} 