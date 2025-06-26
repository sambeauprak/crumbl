import { Link, usePage } from '@inertiajs/react';
import Hero from '../components/public/hero';

export default function PublicLayout({ home = false, children }) {
    const { auth } = usePage().props;

    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <main className={home ? '' : 'pt-[100px]'}>{children}</main>
            <footer className="bg-primary grid justify-center">
                <img src="/logo.svg" alt="Logo" className="mx-auto my-4 h-12 w-auto" />
                <p className="text-center">© {new Date().getFullYear()} all rights reserved. </p>
                <nav className="text-center">
                    <Link href={route('terms')} className="block">
                        Terms
                    </Link>
                    <Link href={route('privacy-policy')} className="block">
                        Privacy Policy
                    </Link>
                </nav>
            </footer>
        </>
    );
}
