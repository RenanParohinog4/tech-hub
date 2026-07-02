import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/" className="logo">
                    <img src="/icons/chat.png" alt="logo" width="24" height="24" />
                    <p>TechHub</p>
                </Link>

                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/create-event">Create Event</Link>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
