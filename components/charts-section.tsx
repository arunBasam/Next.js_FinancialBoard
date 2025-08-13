"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ResponsiveContainer, 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ComposedChart,
  Bar,
  Line,
  LineChart,
} from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';

interface ChartsData {
  clientsData: Array<{ x: number; y: number; clients: number }>;
  sipBusinessData: Array<{ month: string; amount: number; count: number }>;
  monthlyMisData: Array<{ month: string; equity: number; debt: number; hybrid: number }>;
}

export function ChartsSection() {
  const [data, setData] = useState<ChartsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/charts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch charts data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-4 w-60" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-64 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!data) {
    return <div>Error loading charts data</div>;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Clients Bubble Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Client Distribution</CardTitle>
          <CardDescription>Number of clients by portfolio size</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={data.clientsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                dataKey="x" 
                domain={[0, 100]}
                tickFormatter={(value) => `${value}L`}
              />
              <YAxis type="number" dataKey="y" domain={[0, 50]} />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'clients' ? `${value} clients` : value,
                  name === 'clients' ? 'Clients' : name
                ]}
              />
              <Scatter dataKey="clients" fill="#3B82F6" />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* SIP Business Chart */}
      <Card>
        <CardHeader>
          <CardTitle>SIP Business Trends</CardTitle>
          <CardDescription>Monthly SIP amount and count</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data.sipBusinessData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="amount" fill="#10B981" />
              <Line yAxisId="right" type="monotone" dataKey="count" stroke="#F97316" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly MIS Multi-line Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly MIS Performance</CardTitle>
          <CardDescription>Performance across different fund categories</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.monthlyMisData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="equity" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="debt" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="hybrid" stroke="#F97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}