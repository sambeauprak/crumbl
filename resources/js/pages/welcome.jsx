import { Head } from '@inertiajs/react';
import Product from '../components/public/product';
import PublicLayout from '../layouts/public-layout';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <PublicLayout>
                <div className="relative isolate h-[80vh] px-6 pt-14 lg:px-8">
                    <video className="absolute inset-0 -z-10 h-full w-full object-cover" autoPlay loop muted>
                        <source src="hero.mp4" type="video/mp4" />
                    </video>
                </div>
                <Product />
            </PublicLayout>
        </>
    );
}
