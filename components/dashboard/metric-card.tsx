"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp, 
  TrendingDown 
} from "lucide-react";
import { MetricData } from "@/lib/data";

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp,
};

interface MetricCardProps {
  metric: MetricData;
  index: number;
}

export function MetricCard({ metric, index }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <Card className="transition-all duration-300 relative overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
          <p className="text-sm font-semibold text-foreground">{metric.title}</p>
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-extrabold text-foreground">
                {metric.value}
              </div>
              <div className="flex items-center space-x-1 text-base mt-1">
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={`font-bold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>{Math.abs(metric.change).toFixed(1)}%</span>
                <span className="text-gray-500">vs last month</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}