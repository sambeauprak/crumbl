import { Link } from '@inertiajs/react';

export default function Product({ even = false }) {
    return (
        <div className="group -ml-28 flex min-h-[230px] items-center py-5 sm:min-h-[380px] md:-ml-[325px] md:py-20 lg:min-h-[600px] xl:mx-0">
            <div
                className={`background flex min-h-[165px] flex-grow flex-row ${even ? 'flex-row-reverse' : ''} justify-between rounded-2xl p-5 transition-colors duration-300 ease-in hover:cursor-pointer sm:min-h-[220px] md:rounded-[40px] md:p-[50px] lg:min-h-[374px]`}
            >
                <div className="relative mr-6 flex w-[260px] flex-shrink-0 flex-grow-0 items-start justify-end sm:w-[400px] md:w-[600px]">
                    <img
                        alt="Benson Boone’s Moonbeam Ice Cream Cookie"
                        loading="lazy"
                        width={1300}
                        height={1300}
                        decoding="async"
                        data-nimg={1}
                        className="absolute top-1/2 hidden -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 lg:block lg:size-[600px]"
                        srcSet="https://crumbl.video/cdn-cgi/image/width=1920,format=auto,quality=80/https://crumbl.video/71f2adad-1c68-4d8e-ae9f-e27d64bde089_Moonbeam-Ice-Cream_Benson-Logo_Flying-Aerial_Flying.png 1x, https://crumbl.video/cdn-cgi/image/width=3840,format=auto,quality=80/https://crumbl.video/71f2adad-1c68-4d8e-ae9f-e27d64bde089_Moonbeam-Ice-Cream_Benson-Logo_Flying-Aerial_Flying.png 2x"
                        src="https://crumbl.video/cdn-cgi/image/width=3840,format=auto,quality=80/https://crumbl.video/71f2adad-1c68-4d8e-ae9f-e27d64bde089_Moonbeam-Ice-Cream_Benson-Logo_Flying-Aerial_Flying.png"
                        style={{ color: 'transparent' }}
                    />
                    <img
                        alt="Benson Boone’s Moonbeam Ice Cream Cookie"
                        loading="lazy"
                        width={520}
                        height={520}
                        decoding="async"
                        data-nimg={1}
                        className="absolute top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 lg:hidden lg:size-[600px]"
                        srcSet="https://crumbl.video/cdn-cgi/image/width=640,format=auto,quality=80/https://crumbl.video/71f2adad-1c68-4d8e-ae9f-e27d64bde089_Moonbeam-Ice-Cream_Benson-Logo_Flying-Aerial_Flying.png 1x, https://crumbl.video/cdn-cgi/image/width=1080,format=auto,quality=80/https://crumbl.video/71f2adad-1c68-4d8e-ae9f-e27d64bde089_Moonbeam-Ice-Cream_Benson-Logo_Flying-Aerial_Flying.png 2x"
                        src="https://crumbl.video/cdn-cgi/image/width=1080,format=auto,quality=80/https://crumbl.video/71f2adad-1c68-4d8e-ae9f-e27d64bde089_Moonbeam-Ice-Cream_Benson-Logo_Flying-Aerial_Flying.png"
                        style={{ color: 'transparent' }}
                    />
                </div>
                <div className="flex flex-grow flex-col gap-y-[5px] md:gap-y-6">
                    <div className="flex flex-col gap-y-[5px] md:gap-y-0">
                        <div className="flex items-center justify-start pb-[10px] md:pb-[15px]">
                            <p className="on-background hidden text-[14px] leading-[18px] font-normal md:block 2xl:text-[16px] 2xl:leading-[20px]" />
                        </div>
                        <p className="on-background !text-[35px] text-[28px] leading-[32px] font-extrabold transition-colors duration-300 ease-in md:!text-[45px] md:!leading-[60px] lg:!text-[70px] lg:text-[32px] lg:!leading-none lg:leading-[36px] 2xl:text-[36px] 2xl:leading-[40px]">
                            Benson Boone’s Moonbeam Ice Cream Cookie
                        </p>
                        <p className="on-background hidden pt-[15px] text-[16px] leading-[20px] font-normal md:block 2xl:text-[18px] 2xl:leading-[22px]">
                            A mystical, magical chilled chocolate cookie packed with cookies &amp; cream pieces, crowned with vibrant moonbeam ice
                            cream-inspired lemon, berry, and marshmallow toppings, and finished with a sweet white drizzle and a final sprinkle of
                            cookies &amp; cream.
                        </p>
                    </div>
                    <div className="flex gap-2 sm:gap-5">
                        <Link
                            className="on-background inline-flex h-[40px] items-center gap-x-1 rounded-full py-3 transition-all duration-300 ease-in md:hidden md:h-[50px] lg:border-transparent group-hover:lg:border group-hover:lg:px-[25px]"
                            href={route('products.show', { product: 1 })}
                        >
                            <p className="pl-[5px] !text-[12px] text-[16px] leading-[20px] font-normal text-nowrap sm:!text-[13px] md:!text-base md:!font-bold 2xl:text-[18px] 2xl:leading-[22px]">
                                Learn More
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M10 16.75a.75.75 0 0 1-.53-1.281l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.061-1.061l4 4a.75.75 0 0 1 0 1.061l-4 4a.75.75 0 0 1-.531.221"
                                />
                            </svg>
                        </Link>
                        <Link
                            className="on-background hidden h-[40px] items-center rounded-full border-transparent py-3 pr-[30px] pl-[0px] transition-all duration-300 ease-in md:inline-flex md:h-[50px] group-hover:lg:border group-hover:lg:pl-[30px]"
                            href={route('products.show', { product: 1 })}
                        >
                            <p className="pl-[5px] !text-[12px] text-[16px] leading-[20px] font-normal text-nowrap sm:!text-[13px] md:!text-base md:!font-bold 2xl:text-[18px] 2xl:leading-[22px]">
                                Learn More
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
