"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollTop() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !pathname) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [mounted, pathname]);

    return null;
}
