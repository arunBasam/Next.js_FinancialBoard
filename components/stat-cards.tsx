"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShoppingCart, 
  ArrowLeftRight, 
  XCircle, 
  AlertTriangle, 
  Plus 
} from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface StatCardData {
  purchases: number;
  redemptions: number;
  rejectedTransactions: number;
  sipRejections: number;
  newSip: number;
}

const statConfig = [
  {
    title: 'Purchases',
    key: 'purchases' as keyof StatCardData,
    icon: ShoppingCart,
    color: 'text-blue-600',
  },
  {
    title: 'Redemptions',
    key: 'redemptions' as keyof StatCardData,
    icon: ArrowLeftRight,
    color: 'text-green-600',
  },
  {
    title: 'Rejected Transactions',
    key: 'rejectedTransactions' as keyof StatCardData,
    icon: XCircle,
    color: 'text-red-600',
  },
  {
    title: 'SIP Rejections',
    key: 'sipRejections' as keyof StatCardData,
    icon: AlertTriangle,
    color: 'text-orange-600',
  },
  {
    title: 'New SIP',
    key: 'newSip' as keyof StatCardData,
    icon: Plus,
    color: 'text-purple-600',
  },
];

export function StatCards() {
  const [data, setData] = useState<StatCardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/stat-cards');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch stat cards data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-wrap gap-4 justify-between">
        {[...Array(5)].map((_, i) => (
          <Card key={i} className="flex-1 min-w-[180px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {statConfig.map((stat) => {
        const Icon = stat.icon;
        const value = data[stat.key];
        
        return (
          <Card key={stat.key} className="hover:shadow-md transition-shadow flex-1 min-w-[180px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value.toLocaleString()}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}