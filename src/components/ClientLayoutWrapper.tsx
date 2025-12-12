"use client";

import { useState, useEffect } from 'react'

import ScrollTop from "./ScrollTop";
import Navbar from "./NavBar";
import Footer from "./Footer";


export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    return (
        <>
            <ScrollTop />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
