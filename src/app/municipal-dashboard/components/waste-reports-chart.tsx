'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { wasteCompositionData } from '@/lib/data';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

export default function WasteReportsChart() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer config={{}} className="w-full h-full">
         <ResponsiveContainer width="100%" height="100%">
          <BarChart data={wasteCompositionData} layout="vertical" margin={{ left: 10, right: 30 }}>
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              width={80}
            />
            <Tooltip cursor={{ fill: 'hsl(var(--card))' }} content={<ChartTooltipContent />} />
            <Bar dataKey="value" radius={5} background={{ fill: 'hsl(var(--muted))', radius: 5 }}>
              {wasteCompositionData.map((entry, index) => (
                  <svg key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
