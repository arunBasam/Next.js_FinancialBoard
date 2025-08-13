"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const timeRanges = [
  { label: '3 Days', value: 3 },
  { label: '7 Days', value: 7 },
  { label: '10 Days', value: 10 },
  { label: '30 Days', value: 30 },
];

export function TimeRangeFilter() {
  const [selectedRange, setSelectedRange] = useState(7);
  const [loading, setLoading] = useState(false);

  const handleRangeChange = async (range: number) => {
    setLoading(true);
    setSelectedRange(range);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success(`Data updated for ${range} days`);
    }, 500);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {timeRanges.map((range) => (
        <Button
          key={range.value}
          variant={selectedRange === range.value ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleRangeChange(range.value)}
          disabled={loading}
          className="transition-all hover:scale-105"
        >
          {range.label}
        </Button>
      ))}
    </div>
  );
}