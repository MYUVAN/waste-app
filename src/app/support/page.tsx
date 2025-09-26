import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SupportPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
       <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10 justify-between">
          <h1 className="text-xl font-semibold">Support</h1>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
       </header>
       <main className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p>For any queries, please contact Innominds.</p>
                <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:support@innominds.com" className="text-primary hover:underline">
                        support@innominds.com
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+1 (123) 456-7890</span>
                </div>
            </CardContent>
        </Card>
       </main>
    </div>
  );
}
