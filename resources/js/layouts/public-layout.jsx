import { Link, usePage } from '@inertiajs/react';
import Hero from '../components/public/hero';

export default function PublicLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <main>{children}</main>
            <footer className="grid justify-center bg-pink-300">
                <img src="logo.svg" alt="Logo" className="mx-auto my-4 h-12 w-auto" />
                <p className="text-center">© {new Date().getFullYear()} all rights reserved. </p>
                <nav className="text-center">
                    <Link href={route('mentions-legales')} className="block">
                        Mentions légales
                    </Link>
                    <Link href={route('politique-confidentialite')} className="block">
                        Politique de confidentialité
                    </Link>
                </nav>
            </footer>
        </>
    );
}
