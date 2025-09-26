import { DashboardLayout } from '../components/dashboard-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Settings, CalendarClock, MapPin } from 'lucide-react';
import WasteReportsChart from './components/waste-reports-chart';
import RewardSettings from './components/reward-settings';
import ScheduleEditor from './components/schedule-editor';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import StreetDustbinList from './components/street-dustbin-list';
import DistrictRecyclingChart from './components/district-recycling-chart';
import TotalWasteCard from './components/total-waste-card';

export default function MunicipalDashboard() {
  return (
    <DashboardLayout userType="Municipal">
      <Tabs defaultValue="streets" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="streets" className="py-2"><MapPin className="mr-2 h-4 w-4" />Street Monitoring</TabsTrigger>
          <TabsTrigger value="reports" className="py-2"><BarChart3 className="mr-2 h-4 w-4" />Reports</TabsTrigger>
          <TabsTrigger value="rewards" className="py-2"><Settings className="mr-2 h-4 w-4" />Reward Settings</TabsTrigger>
          <TabsTrigger value="schedule" className="py-2"><CalendarClock className="mr-2 h-4 w-4" />Schedule</TabsTrigger>
        </TabsList>
         <TabsContent value="streets">
          <StreetDustbinList />
        </TabsContent>
        <TabsContent value="reports" className="grid gap-4 md:gap-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <TotalWasteCard />
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>City-Wide Waste Composition</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <WasteReportsChart />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Recyclable Waste by District</CardTitle>
                        <CardDescription>Tonnes collected this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DistrictRecyclingChart />
                    </CardContent>
                </Card>
            </div>
        </TabsContent>
        <TabsContent value="rewards">
            <RewardSettings />
        </TabsContent>
        <TabsContent value="schedule">
            <ScheduleEditor />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
