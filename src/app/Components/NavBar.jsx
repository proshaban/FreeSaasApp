'use client';
import { useState } from "react";

const NavLinks = [
    {
        title: "Dashboard",
        link: "/"
    },
    {
        title: "User Management",
        link: "/user-management"
    },
    {
        title: "Rating and Review",
        link: "/ratings"
    },
    {
        title: "Settings",
        link: "/settings"
    },
    {
        title: "History",
        link: "/history"
    },
    {
        title: "All Bookings",
        link: "/all-bookings"
    },
    {
        title: "Push Notification",
        link: "/push-notifications"
    },
    {
        title: "Transaction List",
        link: "/transactions"
    },
    {
        title: "Google Analytics",
        link: "/analytics"
    },
    {
        title: "Multi-Currency",
        link: "/currency"
    }, 
    {
        title: "Category ",
        link: "/category"
    }, 
    {
        title: "Live Chat History",
        link: "/chat-history"
    }, 
    {
        title: "Package Plan",
        link: "/plans"
    }, 
    {
        title: "Referral History",
        link: "/referral"
    },
    {
        title: "Google Map",
        link: "/map"
    }
];

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("/");
    
    return (
        <div className="hidden md:block w-full h-full max-w-[293px] flex flex-col rounded-[20px] bg-[#ffffff] overflow-y-auto">
            <div className="w-full p-5 text-center text-[#199FB1] L3">
                Logo
            </div>
            {NavLinks.map((item, index) => (
                <div className="border-t border-t-[#D8D8D8] p-4 text-[#199FB1]" key={index}>
                    <div 
                        className={`${activeLink === item.link ? 'bg-[#199FB1] text-white' : 'text-[#199FB1]'} rounded-[20px] px-10 py-4 cursor-pointer`}
                        onClick={() => setActiveLink(item.link)}
                    >
                        {item.title}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NavBar;
