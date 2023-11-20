'use client'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import ButtonLogOut from '@/components/client/auth/button-logout';
import { getServerSession } from 'next-auth';
import { redirect, useRouter } from 'next/navigation';
import React from 'react'

export default async function DashboardPage() {
    const session = await getServerSession(nextAuthOptions);
  

    if (!session) {
        redirect("/");
    }
    return (
        <div>
            <h1>Dashboard {session.user?.email}</h1>
          <ButtonLogOut/>
        </div>
    )
}
