"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ArrowUpDown, 
  Download,
  Filter
} from "lucide-react";
import { campaignData, TableData } from "@/lib/data";

export function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof TableData>("revenue");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const filteredData = campaignData
    .filter(item => 
      item.campaign.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return sortDirection === 'asc' 
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });

  const handleSort = (field: keyof TableData) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-green-500/20 text-green-400 border-green-500/50",
      paused: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
      completed: "bg-blue-500/20 text-blue-400 border-blue-500/50"
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {status}
      </Badge>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="glass-card hover:glow-effect transition-all duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-orbitron text-lg">
              Campaign Performance
            </CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-card border-primary/20"
                />
              </div>
              <Button size="sm" variant="outline" className="glass-card">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" variant="outline" className="glass-card">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-primary/20 glass-card">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-primary/5">
                  <TableHead 
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort("campaign")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Campaign</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort("impressions")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Impressions</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort("clicks")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Clicks</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort("ctr")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>CTR %</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort("conversions")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Conversions</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort("revenue")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Revenue</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-primary/5 transition-colors"
                  >
                    <TableCell className="font-medium">{row.campaign}</TableCell>
                    <TableCell className="font-semibold text-base text-foreground">{row.impressions.toLocaleString("en-US")}</TableCell>
                    <TableCell className="font-semibold text-base text-foreground">{row.clicks.toLocaleString("en-US")}</TableCell>
                    <TableCell className="font-semibold text-base text-foreground">{row.ctr}%</TableCell>
                    <TableCell className="font-semibold text-base text-foreground">{row.conversions.toLocaleString("en-US")}</TableCell>
                    <TableCell className="font-semibold text-base text-foreground">${row.revenue.toLocaleString("en-US")}</TableCell>
                    <TableCell>{getStatusBadge(row.status)}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}