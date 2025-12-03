"use client";
import GlobalProvider from "../context/GlobalProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return <GlobalProvider>{children}</GlobalProvider>;
}