import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import AppLayout from '@/layouts/app-layout';

export default function EditProduct() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        price: '',
        image: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('dashboard.products.store'));
    };

    return (
        <AppLayout>
            <Head title="Create new product" />

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Product Name</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Product Name"
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Product Description</Label>
                        <textarea
                            id="description"
                            type="text"
                            required
                            autoFocus
                            tabIndex={2}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Product Description"
                        />
                        <InputError message={errors.description} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="price">Product price</Label>
                        <Input
                            id="price"
                            type="number"
                            required
                            autoFocus
                            tabIndex={3}
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            placeholder="Product price"
                        />
                        <InputError message={errors.price} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="image">Product image</Label>
                        <Input id="image" type="file" required autoFocus tabIndex={3} onChange={(e) => setData('image', e.target.files[0])} />
                        <InputError message={errors.image} />
                    </div>

                    <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create
                    </Button>
                </div>
            </form>
        </AppLayout>
    );
}
