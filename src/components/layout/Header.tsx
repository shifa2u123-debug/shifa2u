"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, Mail, X, Menu, CircleChevronDown } from 'lucide-react';

interface NavLink {
    name: string;
    href: string;
    isPrimary?: boolean;
    subItems?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "/about",
        subItems: [
            { name: "Meet our Caregivers", href: "/about/caregivers" }
        ]
    },
    { name: "Services", href: "/services" },
    {
        name: "Resources",
        href: "/resources",
        subItems: [
            { name: "Blogs", href: "/resources/blogs" },
            { name: "Client Testimonials", href: "/resources/testimonials" },
            { name: "Essential Items For Sale", href: "/resources/items-for-sale" }
        ]
    },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Free Assessment", href: "/free-assessment", isPrimary: true },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // State for mobile dropdowns
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    const toggleMobileDropdown = (name: string) => {
        setOpenMobileDropdown(openMobileDropdown === name ? null : name);
    };

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const isTransparent = pathname === "/" && !isScrolled;

    return (
        <>
            <header
                className={`fixed w-full z-50 transition-all duration-300 ${isTransparent && !isMobileMenuOpen
                    ? "bg-white"
                    : isMobileMenuOpen
                        ? "bg-transparent text-neutral-800 shadow-sm"
                        : "bg-white text-neutral-800 shadow-sm"
                    }`}
            >
                <div className="container-custom py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className={`flex items-center gap-2 z-50 ${isMobileMenuOpen ? "invisible opacity-0" : "visible opacity-100"}`}>
                        <Image src="https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175900/main-logo.png" alt="Al-Shifa" width={200} height={70} className={`object-contain transition-all duration-300`} />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`flex items-center gap-1 text-md font-medium transition-colors hover:text-primary-500 ${link.isPrimary
                                        ? `px-5 py-2.5 rounded-full ${isTransparent
                                            ? "bg-white text-primary-600 hover:bg-neutral-100"
                                            : "bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                                        }`
                                        : ""
                                        }`}
                                >
                                    {link.name}
                                    {link.subItems && (
                                        <CircleChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                                    )}
                                </Link>

                                {/* Desktop Dropdown */}
                                {link.subItems && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-48 z-50">
                                        <div className="bg-white rounded-xl shadow-xl border border-neutral-100 overflow-hidden py-2">
                                            {link.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2.5 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-neutral-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <X />
                            ) : (
                                <Menu />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu Drawer */}
                    <div
                        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                            }`}
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Drawer Content */}
                        <div
                            className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl flex flex-col px-4 pb-8 pt-6 transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                                }`}
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Image src="https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175900/main-logo.png" alt="Al-Shifa" width={160} height={60} className="object-contain" />
                                </Link>
                            </div>

                            <nav className="flex flex-col gap-3 overflow-y-auto">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="w-full">
                                        <div className="relative">
                                            <Link
                                                href={link.href}
                                                onClick={(e) => {
                                                    if (link.subItems) {
                                                        setIsMobileMenuOpen(false);
                                                    } else {
                                                        setIsMobileMenuOpen(false);
                                                    }
                                                }}
                                                className={`flex items-center justify-center w-full text-center px-4 py-3 rounded-full text-base font-medium transition-all duration-200 ${link.isPrimary
                                                    ? "bg-primary-600 text-white shadow-md hover:bg-primary-700"
                                                    : "bg-neutral-200 text-neutral-700 hover:bg-neutral-100"
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>

                                            {/* Accordion Toggle for Submenus */}
                                            {link.subItems && (
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleMobileDropdown(link.name);
                                                    }}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-primary-600"
                                                >
                                                    <CircleChevronDown
                                                        size={20}
                                                        className={`transition-transform duration-300 ${openMobileDropdown === link.name ? "rotate-180 text-primary-600" : ""}`}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Submenu */}
                                        {link.subItems && (
                                            <div
                                                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openMobileDropdown === link.name ? "max-h-40" : "max-h-0"
                                                    }`}
                                            >
                                                <div className="flex flex-col gap-2 pt-2 p-2 bg-neutral-100 rounded-xl mt-1 mx-2">
                                                    {link.subItems.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block px-4 py-2 text-md text-center 
                                                            text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-white transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            <div className="mt-auto pt-8 border-t border-neutral-100">
                                <div className="flex flex-col gap-4 text-sm text-neutral-500">
                                    <p className="font-semibold text-neutral-900">Contact Us</p>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><Phone /></svg>
                                        714-687-1912
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><Mail /></svg>
                                        admin@shifa2u.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Spacer for fixed header on non-home pages */}
            {pathname !== "/" && <div style={{ height: '102px' }} />}
        </>
    );
}
