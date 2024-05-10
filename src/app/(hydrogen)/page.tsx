// import { metaObject } from '@/config/site.config';
// import Analytics from '@/app/shared/file/dashboard';

// export const metadata = {
//   ...metaObject(),
// };

// export default function FileDashboardPage() {
//   return <Analytics />;
// }
import AnalyticsDashboard from '@/app/shared/analytics-dashboard';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Analytics'),
};

export default function AnalyticsPage() {
  return (
    <>
      <AnalyticsDashboard />
    </>
  );
}
