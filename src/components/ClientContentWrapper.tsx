"use client";

import ClientLayoutWrapper from "./ClientLayoutWrapper";

export default function ClientContentWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <ClientLayoutWrapper>
                <div className="relative z-10">{children}</div>
            </ClientLayoutWrapper>
        </div>
    );
}
