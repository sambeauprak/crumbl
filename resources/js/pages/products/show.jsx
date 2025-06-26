import { usePage } from '@inertiajs/react';

export default function () {
    const { product } = usePage().props;

    return <>Coucou c'est la page de détails des produits {product}</>;
}
