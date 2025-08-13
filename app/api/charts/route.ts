import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const data = {
    clientsData: [
      { x: 10, y: 15, clients: 25 },
      { x: 25, y: 22, clients: 40 },
      { x: 40, y: 18, clients: 30 },
      { x: 55, y: 35, clients: 55 },
      { x: 70, y: 28, clients: 45 },
      { x: 85, y: 42, clients: 60 },
      { x: 95, y: 38, clients: 50 },
    ],
    sipBusinessData: [
      { month: 'Jan', amount: 12000, count: 150 },
      { month: 'Feb', amount: 15000, count: 180 },
      { month: 'Mar', amount: 18000, count: 200 },
      { month: 'Apr', amount: 16000, count: 175 },
      { month: 'May', amount: 22000, count: 220 },
      { month: 'Jun', amount: 25000, count: 250 },
    ],
    monthlyMisData: [
      { month: 'Jan', equity: 15.2, debt: 8.5, hybrid: 12.1 },
      { month: 'Feb', equity: 18.7, debt: 7.2, hybrid: 13.8 },
      { month: 'Mar', equity: 22.1, debt: 9.1, hybrid: 15.4 },
      { month: 'Apr', equity: 19.8, debt: 8.8, hybrid: 14.2 },
      { month: 'May', equity: 25.3, debt: 10.2, hybrid: 17.9 },
      { month: 'Jun', equity: 28.6, debt: 11.5, hybrid: 19.3 },
    ],
  };
 
  return NextResponse.json(data);
}