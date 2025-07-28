"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import { channelData } from "@/lib/data";

const COLORS = ['#00ffff', '#ff00ff', '#8b5cf6', '#3b82f6', '#10b981'];

export function ChannelChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="glass-card hover:glow-effect transition-all duration-300">
        <CardHeader>
          <CardTitle className="font-orbitron text-lg">
            Traffic Channels
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {channelData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    stroke={COLORS[index % COLORS.length]}
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="glass-card p-3 border">
                        <p className="font-medium">{payload[0]?.payload?.name}</p>
                        <p className="text-primary">
                          {payload[0]?.value}%
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend 
                wrapperStyle={{ color: '#888888' }}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}