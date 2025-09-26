export const householdData = [
  { id: 'HH-001', address: '123 Green St', dustbinStatus: 'Full', recyclablePercent: 82, lastUpdate: '2m ago' },
  { id: 'HH-002', address: '456 Eco Ave', dustbinStatus: 'Half', recyclablePercent: 55, lastUpdate: '15m ago' },
  { id: 'HH-003', address: '789 Recycle Rd', dustbinStatus: 'Empty', recyclablePercent: 91, lastUpdate: '1h ago' },
  { id: 'HH-004', address: '101 Nature Way', dustbinStatus: 'Full', recyclablePercent: 45, lastUpdate: '5m ago' },
  { id: 'HH-005', address: '212 Planet Pl', dustbinStatus: 'Half', recyclablePercent: 76, lastUpdate: '30m ago' },
  { id: 'HH-006', address: '333 Earth Blvd', dustbinStatus: 'Full', recyclablePercent: 68, lastUpdate: '1m ago' },
];

export const collectionSchedule = [
  { area: 'North District', day: 'Monday', items: 'General & Recyclables' },
  { area: 'South District', day: 'Tuesday', items: 'General & Recyclables' },
  { area: 'East District', day: 'Wednesday', items: 'General & Recyclables' },
  { area: 'West District', day: 'Thursday', items: 'General & Recyclables' },
  { area: 'Central District', day: 'Friday', items: 'General, Recyclables & Organics' },
];

export const wasteCompositionData = [
  { name: 'Recyclable', value: 65, fill: 'hsl(var(--chart-1))' },
  { name: 'Organic', value: 20, fill: 'hsl(var(--chart-2))' },
  { name: 'General', value: 15, fill: 'hsl(var(--chart-3))' },
];

export const rewardTiers = {
  bronze: 50,
  silver: 70,
  gold: 90,
};
