'use client'
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { ReactNode } from "react";


interface PrivateLayoutProps {
    children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {


    return (
        <>
            <nav>Auth</nav>
            <Button onClick={()=>signIn()}>Login</Button>
            {children}
        </>
    );
}