// Mock data for the dashboard
export interface MetricData {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: string;
}

export interface ChartData {
  name: string;
  value: number;
  revenue?: number;
  users?: number;
  conversions?: number;
  date?: string;
}

export interface TableData {
  id: string;
  campaign: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  revenue: number;
  status: 'active' | 'paused' | 'completed';
}

export const metrics: MetricData[] = [
  {
    title: 'Total Revenue',
    value: '$2,847,592',
    change: 12.5,
    trend: 'up',
    icon: 'DollarSign'
  },
  {
    title: 'Active Users',
    value: '456,789',
    change: 8.2,
    trend: 'up',
    icon: 'Users'
  },
  {
    title: 'Conversions',
    value: '23,456',
    change: -2.4,
    trend: 'down',
    icon: 'Target'
  },
  {
    title: 'Growth Rate',
    value: '34.7%',
    change: 15.3,
    trend: 'up',
    icon: 'TrendingUp'
  }
];

export const revenueData: ChartData[] = [
  { name: 'Jan', revenue: 186000, users: 4000, conversions: 2400, value: 0 },
  { name: 'Feb', revenue: 205000, users: 3800, conversions: 2210, value: 0 },
  { name: 'Mar', revenue: 237000, users: 4200, conversions: 2800, value: 0 },
  { name: 'Apr', revenue: 273000, users: 4600, conversions: 3200, value: 0 },
  { name: 'May', revenue: 209000, users: 4100, conversions: 2650, value: 0 },
  { name: 'Jun', revenue: 314000, users: 5200, conversions: 3800, value: 0 },
  { name: 'Jul', revenue: 356000, users: 5800, conversions: 4200, value: 0 },
  { name: 'Aug', revenue: 298000, users: 5100, conversions: 3600, value: 0 },
  { name: 'Sep', revenue: 387000, users: 6200, conversions: 4800, value: 0 },
  { name: 'Oct', revenue: 421000, users: 6800, conversions: 5200, value: 0 },
  { name: 'Nov', revenue: 378000, users: 6100, conversions: 4600, value: 0 },
  { name: 'Dec', revenue: 456000, users: 7200, conversions: 5800, value: 0 }
];

export const channelData: ChartData[] = [
  { name: 'Organic Search', value: 42 },
  { name: 'Social Media', value: 28 },
  { name: 'Email Marketing', value: 15 },
  { name: 'Paid Ads', value: 10 },
  { name: 'Direct', value: 5 }
];

export const campaignData: TableData[] = [
  {
    id: '1',
    campaign: 'Summer Sale 2024',
    impressions: 1250000,
    clicks: 45600,
    ctr: 3.65,
    conversions: 2340,
    revenue: 156780,
    status: 'active'
  },
  {
    id: '2',
    campaign: 'Black Friday Special',
    impressions: 980000,
    clicks: 52300,
    ctr: 5.34,
    conversions: 3120,
    revenue: 234500,
    status: 'active'
  },
  {
    id: '3',
    campaign: 'Spring Collection',
    impressions: 756000,
    clicks: 28900,
    ctr: 3.82,
    conversions: 1580,
    revenue: 98600,
    status: 'completed'
  },
  {
    id: '4',
    campaign: 'Holiday Campaign',
    impressions: 1100000,
    clicks: 41200,
    ctr: 3.75,
    conversions: 2890,
    revenue: 187400,
    status: 'paused'
  },
  {
    id: '5',
    campaign: 'Product Launch',
    impressions: 650000,
    clicks: 23800,
    ctr: 3.66,
    conversions: 1240,
    revenue: 78900,
    status: 'active'
  }
];

// Function to simulate real-time data updates
export const updateMetrics = (currentMetrics: MetricData[]): MetricData[] => {
  return currentMetrics.map(metric => ({
    ...metric,
    change: metric.change + (Math.random() - 0.5) * 2,
  }));
};