import { Navigation } from '@/components/navigation';
import { MainCards } from '@/components/main-cards';
import { TimeRangeFilter } from '@/components/time-range-filter';
import { StatCards } from '@/components/stat-cards';
import { ChartsSection } from '@/components/charts-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <MainCards />
        <TimeRangeFilter />
        <StatCards />
        <ChartsSection />
      </main>
    </div>
  );
}