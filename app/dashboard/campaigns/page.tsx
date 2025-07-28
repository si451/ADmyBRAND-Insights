'use client';

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DataTable } from "@/components/dashboard/data-table";
import { motion } from "framer-motion";

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <h2 className="text-3xl font-bold font-orbitron mb-2">Campaigns</h2>
              <p className="text-muted-foreground">Manage and review your marketing campaigns here.</p>
            </motion.div>
            <DataTable />
            <div className="mt-8">
              <div className="rounded-lg border border-primary/20 p-6 glass-card">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">Campaign creation and management tools will appear here.</p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
} 