import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ButtonLogOut() {
    const router = useRouter();

    async function logout() {
      await signOut({
        redirect: false,
      });
  
      router.replace("/");
    }
  return (
    <>
    <Button onClick={logout}>Log Out</Button>
    </>
  )
}
