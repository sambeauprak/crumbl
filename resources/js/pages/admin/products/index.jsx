import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';

export default function () {
    const { products } = usePage().props;
    return (
        <AppLayout>
            <Head title="Dashboard" />

            {products.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div key={product.id} className="rounded bg-white p-4 shadow">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="font-bold text-green-600">${product.price}</p>
                            <img src={'/storage/' + product.image_url} alt={product.name} className="mt-2 h-48 w-full rounded object-cover" />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-4 text-center">
                    <p className="text-gray-500">No products available.</p>
                </div>
            )}
        </AppLayout>
    );
}
