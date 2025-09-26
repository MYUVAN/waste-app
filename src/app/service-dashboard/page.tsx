import { DashboardLayout } from '../components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { serviceRequestsData } from '@/lib/data';
import { Wrench, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServiceDashboard() {

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'destructive';
      case 'In Progress':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
        case 'Pending': return <Clock className="h-4 w-4" />;
        case 'In Progress': return <Wrench className="h-4 w-4" />;
        default: return null;
    }
  }

  return (
    <DashboardLayout userType="Service">
      <Card>
        <CardHeader>
          <CardTitle>Active Service Requests</CardTitle>
          <CardDescription>
            List of households requiring dustbin maintenance or repair.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Household ID</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Issue Reported</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {serviceRequestsData.map(req => (
                        <TableRow key={req.householdId}>
                            <TableCell className="font-medium">{req.householdId}</TableCell>
                            <TableCell>{req.address}</TableCell>
                            <TableCell>{req.issue}</TableCell>
                            <TableCell>
                                <Badge variant={getStatusVariant(req.status)} className="flex items-center gap-2 w-fit">
                                    {getStatusIcon(req.status)}
                                    {req.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                {req.status === 'Pending' && (
                                     <Button size="sm">Start Service</Button>
                                )}
                                {req.status === 'In Progress' && (
                                     <Button size="sm" variant="outline">Mark as Resolved</Button>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
           </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
