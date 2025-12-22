"use client";

import Image from "next/image";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white/10 backdrop-blur-xl text-gray-900 rounded-3xl w-[90%] mx-auto px-4 py-2 shadow-xl shadow-black/10 transition-all duration-300">
            <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-6">
                <div className="">
                    <Link href="/homepage">
                        <Image
                            src="/gym-logo.svg"
                            width={80}
                            height={80}
                            className="cursor-pointer"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="w-full max-w-md order-3 md:order-none">
                    {/* Inserisci qui la SearchBar */}
                </div>
                <div className="flex-shrink-0">
                    <Link
                        href="/schedule"
                        className="inline-flex px-6 py-3 bg-white/30 hover:bg-white/40 text-gray-900 border border-white/30 rounded-2xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        Crea Scheda
                    </Link>
                </div>
            </div>
        </nav>
    );
}
