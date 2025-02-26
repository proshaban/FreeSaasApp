'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            router.push("/auth/login");
        }
    }, []);

    return (
        <div className="w-full h-full bg-[#EAEAEB] relative flex items-center justify-center">
            <Image src='/main-bg.png' width={2000} height={2000} quality={100} alt='bg' className='absolute w-full object-contain top-0 z-[0]' />
            <div className='w-full max-width flex gap-5 my-[50px] mx-4 relative'>
                {/* Navbar */}
                <NavBar />

                {/* content Area */}
                <div className='w-full'>
                    {/* Dashboard Content */}
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}
