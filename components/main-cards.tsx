"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, DollarSign, PiggyBank } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface MainCardData {
  aum: {
    value: string;
    change: number;
    trend: 'up' | 'down';
  };
  sip: {
    value: string;
    change: number;
    trend: 'up' | 'down';
  };
}

export function MainCards() {
  const [data, setData] = useState<MainCardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/main-cards');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch main cards data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {[...Array(2)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-32 mb-2" />
              <Skeleton className="h-4 w-24 mb-4" />
              <Skeleton className="h-9 w-28" />
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
    <div className="grid gap-6 md:grid-cols-2">
      {/* AUM Card */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">AUM</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-center">{data.aum.value}</div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            {data.aum.trend === 'up' ? (
              <TrendingUp className="h-3 w-3 text-green-500" />
            ) : (
              <TrendingDown className="h-3 w-3 text-red-500" />
            )}
            <span className={data.aum.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
              {data.aum.change > 0 ? '+' : ''}{data.aum.change}% MoM
            </span>
          </div>
          <div className="flex justify-center mt-4">
            <Button size="sm">
              View Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* SIP Card */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">SIP</CardTitle>
          <PiggyBank className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-center">{data.sip.value}</div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            {data.sip.trend === 'up' ? (
              <TrendingUp className="h-3 w-3 text-green-500" />
            ) : (
              <TrendingDown className="h-3 w-3 text-red-500" />
            )}
            <span className={data.sip.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
              {data.sip.change > 0 ? '+' : ''}{data.sip.change}% MoM
            </span>
          </div>
          <div className="flex justify-center mt-4">
            <Button size="sm">
              View Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}