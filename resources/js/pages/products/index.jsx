import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Page de produits"></Head>
            <PublicLayout>Ceci est la page de liste des produits</PublicLayout>
        </>
    );
}
