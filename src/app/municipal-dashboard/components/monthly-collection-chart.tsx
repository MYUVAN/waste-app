'use client';

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { monthlyCollectionData } from '@/lib/data';
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';

export default function MonthlyCollectionChart() {
    const chartConfig = {
        total: {
          label: 'Total Waste',
          color: 'hsl(var(--chart-2))',
        },
        recyclable: {
          label: 'Recyclable Waste',
          color: 'hsl(var(--chart-1))',
        },
    };

  return (
    <div className="h-[300px] w-full">
      <ChartContainer config={chartConfig} className="w-full h-full">
         <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyCollectionData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} unit="t" />
            <Tooltip cursor={{ fill: 'hsl(var(--card))' }} content={<ChartTooltipContent />} />
             <Legend content={<ChartLegendContent />} />
            <Line dataKey="total" type="monotone" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
            <Line dataKey="recyclable" type="monotone" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
