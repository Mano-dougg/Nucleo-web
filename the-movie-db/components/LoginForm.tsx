'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authenticate } from '@/lib/actions/actions';
import { ShieldAlert } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';

export function LoginForm(
) {
  const [ state, formAction ] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription>
          Enter your credentials to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action={formAction}
          className="grid gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="123456789"
              required
            />
          </div>
          <Button
            type="submit"
            aria-disabled={pending}
            className="w-full"
          >
            Login
          </Button>
          {state && (
            <>
              <ShieldAlert className="w-6 h-6 text-red-500" />
              <p className="text-red-500">{state}</p>
            </>
          )}
        </form>
        <div className="mt-4 text-center text-sm">
          Dont have an account?{" "}
          <Link href="/" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
