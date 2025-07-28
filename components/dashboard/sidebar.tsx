"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  Target, 
  Settings, 
  TrendingUp,
  Database,
  Layers,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: 'Overview', icon: BarChart3, href: '/dashboard/overview' },
  { name: 'Analytics', icon: TrendingUp, href: '/dashboard/analytics' },
  { name: 'Campaigns', icon: Target, href: '/dashboard/campaigns' },
  { name: 'Audience', icon: Users, href: '/dashboard/audience' },
  { name: 'Data Sources', icon: Database, href: '/dashboard/data-sources' },
  { name: 'Integrations', icon: Layers, href: '/dashboard/integrations' },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-64 min-h-screen bg-background/50 backdrop-blur-xl border-r border-primary/20"
    >
      <div className="p-6">
        <nav className="space-y-2">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <Link href={item.href} passHref legacyBehavior>
                  <Button
                    asChild
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start text-left",
                      isActive
                        ? "bg-primary/20 text-primary border border-primary/50 glow-effect pointer-events-none"
                        : "hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    )}
                  >
                    <span className="flex items-center">
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </span>
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}