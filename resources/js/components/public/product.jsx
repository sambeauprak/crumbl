export default function Product() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="mt-16 space-y-16">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                        <div className={'mt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mt-0 xl:col-span-4'}>
                            <h3 className="text-lg font-medium text-gray-900">Minimal and thoughtful</h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease,
                                and the front pouch provides a convenient place for your charger cable.
                            </p>
                        </div>
                        <div className={'relative flex-auto lg:col-span-7 lg:col-start-6 lg:row-start-1 xl:col-span-8 xl:col-start-5'}>
                            <img
                                alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull."
                                src="cookies/moonbeam.webp"
                                className="absolute top-0 w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
