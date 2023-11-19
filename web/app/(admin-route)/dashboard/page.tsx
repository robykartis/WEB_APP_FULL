import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function DashboardPage() {
    // const session = await getServerSession(nextAuthOptions);

    // if (!session) {
    //     redirect("/");
    // }
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
