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
            <PublicLayout home>
                <div className="relative isolate h-[80vh] px-6 pt-14 lg:px-8">
                    <video className="absolute inset-0 -z-10 h-full w-full object-cover" autoPlay loop muted>
                        <source src="hero.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="max-w-8xl mx-auto flex w-full flex-col gap-y-[30px] overflow-x-clip px-4 py-6 md:gap-y-[50px] md:px-[30px] md:py-[100px]">
                    <div className="mb-4 flex flex-col gap-y-4 lg:gap-y-[30px]">
                        <div>
                            <p className="bg-primary inline-block rounded-[7.5px] px-[18px] py-[3px] text-[16px] leading-[20px] font-normal md:!text-[21px] md:!leading-9 2xl:text-[18px] 2xl:leading-[22px]">
                                New
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[44px] leading-[50px] font-extrabold capitalize md:!text-[55px] md:!leading-[60px] lg:!text-[100px] lg:text-[60px] lg:!leading-none lg:leading-[66px] 2xl:text-[75px] 2xl:leading-[80px]">
                                Our preferences
                            </h1>
                        </div>
                    </div>
                </div>
                <Product />
                <Product even />
                <Product />
                <Product even />
                <Product />
            </PublicLayout>
        </>
    );
}
