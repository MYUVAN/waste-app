import { householdData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

export default function HouseholdList() {
  const getStatusVariant = (status: string): "destructive" | "secondary" | "outline" => {
    switch (status) {
      case 'Full':
        return 'destructive';
      case 'Half':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Household Monitoring</CardTitle>
        <CardDescription>Live status of all registered households.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Household ID</TableHead>
              <TableHead className="hidden md:table-cell">Address</TableHead>
              <TableHead>Dustbin Status</TableHead>
              <TableHead className="text-right">Recyclable %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {householdData.map((household) => (
              <TableRow key={household.id}>
                <TableCell className="font-medium">{household.id}</TableCell>
                <TableCell className="hidden md:table-cell">{household.address}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(household.dustbinStatus)}>{household.dustbinStatus}</Badge>
                </TableCell>
                <TableCell className={cn("text-right font-semibold", household.recyclablePercent > 70 ? 'text-primary' : 'text-muted-foreground')}>
                  {household.recyclablePercent}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
