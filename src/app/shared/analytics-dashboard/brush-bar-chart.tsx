'use client';

import WidgetCard from '@/components/cards/widget-card';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '2', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '3', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '4', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '5', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '6', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '7', Warning: Math.floor(Math.random()  * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '8', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '9', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '10', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // Add more entries as needed, following the same pattern
  { name: '12', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '13', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  { name: '14', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '15', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '16', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '17', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '18', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '19', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '20', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '21', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '22', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '23', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '24', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '25', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '26', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '27', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '28', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '29', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '30', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '31', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '32', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
  // { name: '33', Warning: Math.floor(Math.random() * 10), Critical: Math.floor(Math.random() * 2) },
];

export default function BrushBarChart({ className }: { className?: string }) {
  return (
    <WidgetCard title={'Brush Bar Chart'} className={className}>
      <div className="mt-5 aspect-[1060/660] w-full lg:mt-7">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={32}
            margin={{
              left: -20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tickLine={false} dataKey="name" />
            <YAxis tickLine={false} />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
            <ReferenceLine y={0} stroke="#000" />
            <Brush dataKey="name" height={30} stroke="#8200E9" />
            <Bar dataKey="Warning" fill="#FFCC00" />
            <Bar dataKey="Critical" fill="#FF0000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
