import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const data = {
    aum: {
      value: "₹2,45,67,890",
      change: 12.5,
      trend: "up" as const,
    },
    sip: {
      value: "₹45,23,100",
      change: -2.3,
      trend: "down" as const,
    },
  };

  return NextResponse.json(data);
}