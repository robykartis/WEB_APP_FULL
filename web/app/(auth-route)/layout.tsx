
import { ReactNode } from "react";


interface PrivateLayoutProps {
    children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {


    return (
        <>
            <nav>Auth</nav>
            {children}
        </>
    );
}