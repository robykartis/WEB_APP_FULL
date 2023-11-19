import React from 'react'
import NavbarComponent from './navbar-component'

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavbarComponent />
            <div>{children}</div>
            <div>Footer</div>
        </>
    )
}
