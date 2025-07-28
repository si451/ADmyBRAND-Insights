"use client";

import { motion } from "framer-motion";
import { Bell, User, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-primary/20 bg-background/50 backdrop-blur-xl sticky top-0 z-50"
    >
      <div className="flex h-20 items-center px-8 gap-8">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold font-orbitron flex items-center gap-3">
            <BarChart3 className="h-7 w-7 text-primary" />
            ADmyBRAND Insights
          </h1>
          <p className="text-base text-muted-foreground ml-2">
            AI-Powered Analytics Dashboard
          </p>
        </div>
        <div className="ml-auto flex items-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="icon" className="glass-card">
              <Bell className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <Avatar className="h-9 w-9 border-2 border-primary/50">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback className="bg-primary/20 text-primary">
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}