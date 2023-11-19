import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import NextAuthSessionProvider from "@/providers/sessionProviders";


interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <NextAuthSessionProvider>
        <nav>NavAdmin</nav>
        {children}
      </NextAuthSessionProvider>
    </>
  );
}