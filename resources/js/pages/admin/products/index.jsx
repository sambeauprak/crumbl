import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function () {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            Coucou c'est la page d'index des produits côté ADMIN
        </AppLayout>
    );
}
