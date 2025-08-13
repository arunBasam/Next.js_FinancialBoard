import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const data = {
    purchases: 1234,
    redemptions: 567,
    rejectedTransactions: 23,
    sipRejections: 8,
    newSip: 156,
  };

  return NextResponse.json(data);
}