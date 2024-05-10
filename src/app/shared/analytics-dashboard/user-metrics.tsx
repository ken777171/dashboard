'use client';

import WidgetCard from '@/components/cards/widget-card';
import {
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import { useMedia } from '@/hooks/use-media';
import {
  RoundedTopBar,
  RoundedTopBarFill,
} from '@/components/charts/rounded-topbar';
import { CustomYAxisTick } from '@/components/charts/custom-yaxis-tick';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import ButtonGroupAction from '@/components/charts/button-group-action';
import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';

const data = [
  { Day: 'Jan 1', Critical: 0, Warning: 7, Damage: 1 },
  { Day: 'Jan 2', Critical: 1, Warning: 1, Damage: 2 },
  { Day: 'Jan 3', Critical: 2, Warning: 6, Damage: 3 },
  { Day: 'Jan 4', Critical: 3, Warning: 3, Damage: 4 },
  { Day: 'Jan 5', Critical: 2, Warning: 5, Damage: 5 },
  { Day: 'Jan 6', Critical: 0, Warning: 8, Damage: 6 },
  { Day: 'Jan 7', Critical: 1, Warning: 10, Damage: 7 },
  { Day: 'Jan 8', Critical: 3, Warning: 9, Damage: 10 },
  { Day: 'Jan 9', Critical: 0, Warning: 4, Damage: 19 },
  { Day: 'Jan 10', Critical: 1, Warning: 2, Damage: 26 },
  { Day: 'Jan 11', Critical: 2, Warning: 10, Damage: 28},
  { Day: 'Jan 12', Critical: 3, Warning: 3, Damage: 32 },
];



const filterOptions = ['Day', 'Week','Month'];

export default function UserMetrics({ className }: { className?: string }) {
  const isMediumScreen = useMedia('(max-width: 1200px)', false);
  const isTablet = useMedia('(max-width: 800px)', false);
  function handleFilterBy(data: string) {
    console.log('Audience Metrics Filter:', data);
  }

  return (
    <WidgetCard
      title={'Traction Motor Error Stats'}
      description={
        <>
          <Badge
            renderAsDot
            className="me-0.5 bg-[#E8E9FF] dark:bg-[#7c88b2]"
          />{' '}
          Users
          <Badge renderAsDot className="me-0.5 ms-4 bg-[#5a5fd7]" /> New Users
          <Badge renderAsDot className="me-0.5 ms-4 bg-[#8200E9]" /> Sessions
        </>
      }
      descriptionClassName="text-gray-500 mt-1.5 mb-3 @lg:mb-0"
      action={
        <ButtonGroupAction
          options={filterOptions}
          onChange={(data) => handleFilterBy(data)}
          className="-ms-2 mb-3 @lg:mb-0 @lg:ms-0"
        />
      }
      headerClassName="flex-col @lg:flex-row"
      rounded="lg"
      className={className}
    >
      <SimpleBar>
        <div className={cn('h-[420px] w-full pt-9 @7xl:h-[480px]')}>
          <ResponsiveContainer
            width="100%"
            {...(isTablet && { minWidth: '700px' })}
            height="100%"
          >
            <ComposedChart
              data={data}
              barSize={isMediumScreen ? 20 : 28}
              className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500  [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
            >
              <defs>
                <linearGradient id="analyticsArea" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#F0F1FF"
                    className=" [stop-opacity:0.2]"
                  />
                  <stop offset="95%" stopColor="#8200E9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={<CustomYAxisTick />}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="step"
                dataKey="Damage"
                stroke="#8200E9"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#analyticsArea)"
              />
              <Bar
                dataKey="Critical"
                fill="#5a5fd7"
                {...(isTablet
                  ? { stackId: 'userMetrics' }
                  : { shape: <RoundedTopBarFill /> })}
              />
              <Bar
                dataKey="Warning"
                fill="#E8E9FF"
                {...(isTablet && { stackId: 'userMetrics' })}
                shape={<RoundedTopBar />}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
