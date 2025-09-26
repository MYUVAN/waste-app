import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { currentMonthTotal } from "@/lib/data";

export default function TotalWasteCard() {
    return (
        <Card>
            <CardHeader>
                <CardDescription>This Month</CardDescription>
                <CardTitle className="text-4xl">{currentMonthTotal.toFixed(1)} Tonnes</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-muted-foreground">Total waste collected</p>
            </CardContent>
        </Card>
    );
}
