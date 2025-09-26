'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Logo } from '@/components/logo';
import { Home, Briefcase } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-4">
      <Card className="mx-auto w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <Logo className="mb-4" />
          <CardTitle className="text-2xl font-bold font-headline">Welcome to EcoSort</CardTitle>
          <CardDescription>Your smart waste segregation partner.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="household" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="household"><Home className="mr-2 h-4 w-4" />Household</TabsTrigger>
              <TabsTrigger value="municipal"><Briefcase className="mr-2 h-4 w-4" />Municipal</TabsTrigger>
            </TabsList>
            <TabsContent value="household">
              <form className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="household-id">Household ID</Label>
                  <Input id="household-id" placeholder="e.g., HH-001" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="household-password">Password</Label>
                  <Input id="household-password" type="password" required />
                </div>
                <Link href="/household-dashboard" passHref>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Login as Household
                  </Button>
                </Link>
              </form>
            </TabsContent>
            <TabsContent value="municipal">
              <form className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="municipal-id">Municipal ID</Label>
                  <Input id="municipal-id" placeholder="e.g., M-CITY-1" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="municipal-password">Password</Label>
                  <Input id="municipal-password" type="password" required />
                </div>
                <Link href="/municipal-dashboard" passHref>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Login as Municipal
                  </Button>
                </Link>
              </form>
            </TabsContent>
          </Tabs>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="#" className="underline text-primary">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
