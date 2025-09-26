import { DashboardLayout } from '../components/dashboard-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, BarChart3, Settings, CalendarClock, MapPin } from 'lucide-react';
import HouseholdList from './components/household-list';
import WasteReportsChart from './components/waste-reports-chart';
import RewardSettings from './components/reward-settings';
import ScheduleEditor from './components/schedule-editor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StreetDustbinList from './components/street-dustbin-list';

export default function MunicipalDashboard() {
  return (
    <DashboardLayout userType="Municipal">
      <Tabs defaultValue="households" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
          <TabsTrigger value="households" className="py-2"><Users className="mr-2 h-4 w-4" />Households</TabsTrigger>
          <TabsTrigger value="streets" className="py-2"><MapPin className="mr-2 h-4 w-4" />Street Monitoring</TabsTrigger>
          <TabsTrigger value="reports" className="py-2"><BarChart3 className="mr-2 h-4 w-4" />Reports</TabsTrigger>
          <TabsTrigger value="rewards" className="py-2"><Settings className="mr-2 h-4 w-4" />Reward Settings</TabsTrigger>
          <TabsTrigger value="schedule" className="py-2"><CalendarClock className="mr-2 h-4 w-4" />Schedule</TabsTrigger>
        </TabsList>
        <TabsContent value="households">
          <HouseholdList />
        </TabsContent>
         <TabsContent value="streets">
          <StreetDustbinList />
        </TabsContent>
        <TabsContent value="reports">
            <Card>
                <CardHeader>
                    <CardTitle>City-Wide Waste Composition</CardTitle>
                </CardHeader>
                <CardContent>
                    <WasteReportsChart />
                </CardContent>
            </Card>
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
