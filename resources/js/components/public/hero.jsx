'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import SidebarBag from './header/sidebar-bag';
import SidebarMenu from './header/sidebar-menu';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Produits', href: 'produits', current: false },
    { name: 'Panier', href: '/panier', current: false },
];

export default function Hero({ home }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [bagMenuOpen, setBagMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const heroRef = useRef(null);
    useEffect(() => {
        if (!heroRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry);
                setIsScrolled(!entry.isIntersecting);
            },
            { threshold: 0 },
        );

        observer.observe(heroRef.current);

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, [heroRef]);

    return (
        <div className="bg-white">
            <header className="fixed inset-x-0 top-0 z-50">
                <nav
                    aria-label="Global"
                    className={`relative flex items-center justify-between p-6 transition duration-300 lg:px-8 ${
                        isScrolled ? 'bg-primary text-black shadow-md' : 'bg-transparent text-white'
                    }`}
                >
                    <div className="flex">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Link href={route('home')} className="-m-1.5 p-1.5">
                            <span className="sr-only">Crumbl</span>
                            <img alt="" src="/logo.svg" className="h-8 w-auto" />
                        </Link>
                    </div>
                    <div className="relative hidden sm:block">
                        <div className="absolute top-[8px] left-[20px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#EB0000] text-xs text-white">
                            1
                        </div>
                        <div className="hidden lg:block">
                            <button
                                type="button"
                                onClick={() => setBagMenuOpen(true)}
                                className="focus:ring-dark-blue invisible mr-[22px] inline-flex h-[40px] min-h-[40px] w-fit max-w-[400px] flex-nowrap items-center justify-center rounded-full bg-black py-3 pr-[30px] pl-[25px] text-white sm:visible sm:h-[50px] sm:min-h-[50px]"
                            >
                                <span className="sr-only">Open bag</span>
                                <span className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="size-8 text-white"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="m20.984 17.715-.667-6.999C20.17 9.176 18.999 8 17.331 8h-.58V7c0-2.62-2.13-4.75-4.75-4.75S7.251 4.38 7.251 7v1h-.58c-1.668 0-2.84 1.176-2.986 2.716l-.667 6.999C2.85 19.476 4.004 21 6.004 21h11.997c1.997 0 3.151-1.523 2.983-3.285M8.75 7c0-1.79 1.46-3.25 3.25-3.25S15.25 5.21 15.25 7v1h-6.5z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="w-full text-base text-[16px] leading-[20px] font-bold font-semibold text-nowrap 2xl:text-[18px] 2xl:leading-[22px]">
                                    View Bag
                                </span>
                            </button>
                        </div>
                        <div className="lg:hidden">
                            <button className="invisible mr-[22px] inline-flex h-[40px] min-h-[40px] w-fit max-w-[400px] flex-nowrap items-center justify-center rounded-full bg-black py-3 pr-[30px] pl-[25px] text-white sm:visible sm:h-[50px] sm:min-h-[50px]">
                                <span className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="size-8 text-white"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="m20.984 17.715-.667-6.999C20.17 9.176 18.999 8 17.331 8h-.58V7c0-2.62-2.13-4.75-4.75-4.75S7.251 4.38 7.251 7v1h-.58c-1.668 0-2.84 1.176-2.986 2.716l-.667 6.999C2.85 19.476 4.004 21 6.004 21h11.997c1.997 0 3.151-1.523 2.983-3.285M8.75 7c0-1.79 1.46-3.25 3.25-3.25S15.25 5.21 15.25 7v1h-6.5z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="w-full text-base text-[16px] leading-[20px] font-bold font-semibold text-nowrap 2xl:text-[18px] 2xl:leading-[22px]">
                                    View Bag
                                </span>
                            </button>
                        </div>
                    </div>
                </nav>

                <SidebarMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} />
                <SidebarBag bagMenuOpen={bagMenuOpen} setBagMenuOpen={setBagMenuOpen} />
            </header>

            <div ref={heroRef}></div>
        </div>
    );
}
