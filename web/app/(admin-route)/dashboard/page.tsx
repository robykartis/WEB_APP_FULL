import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";

import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="p-5"> {JSON.stringify(session)}</div>
      <h1 className="text-2xl mb-8">Hay, {session?.user.email}</h1>
  <Button>Log Out</Button>
    </div>
  );
}