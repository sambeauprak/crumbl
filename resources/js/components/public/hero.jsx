'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Produits', href: 'produits', current: false },
    { name: 'Panier', href: '/panier', current: false },
];

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                    className={`flex items-center justify-between p-6 transition duration-300 lg:px-8 ${
                        isScrolled ? 'bg-pink-300 text-black shadow-md' : 'bg-transparent text-white'
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
                    <div className="flex">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src="logo.svg" className="h-8 w-auto" />
                        </a>
                    </div>
                    <div className="">&nbsp;</div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div ref={heroRef}></div>
        </div>
    );
}
