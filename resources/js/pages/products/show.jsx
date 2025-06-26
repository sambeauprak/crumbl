import PublicLayout from '@/layouts/public-layout';
import { Head, usePage } from '@inertiajs/react';

export default function () {
    const { product } = usePage().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <PublicLayout>
                <div>
                    <div style={{ backgroundColor: 'rgb(244, 216, 28)', color: 'rgb(0, 0, 0)' }} />
                    <div
                        className="relative flex flex-col items-center justify-center"
                        style={{ backgroundColor: 'rgb(244, 216, 28)', color: 'rgb(0, 0, 0)' }}
                    >
                        <div className="inline-flex flex-grow flex-col items-center justify-center px-2 pt-6 pb-10 md:flex-row md:px-4 md:pt-[40px]">
                            <img
                                id="cookieImage"
                                alt="Lemon Cake"
                                loading="lazy"
                                width={460}
                                height={460}
                                decoding="async"
                                data-nimg={1}
                                className="hidden md:flex xl:hidden"
                                srcSet="https://crumbl.video/cdn-cgi/image/width=640,format=auto,quality=80/https://crumbl.video/ea5ebf84-f31f-45e1-a414-db29ab2d95bb_LemonCake_LTO_FlyingAerial_TECH.png 1x, https://crumbl.video/cdn-cgi/image/width=1080,format=auto,quality=80/https://crumbl.video/ea5ebf84-f31f-45e1-a414-db29ab2d95bb_LemonCake_LTO_FlyingAerial_TECH.png 2x"
                                src="https://crumbl.video/cdn-cgi/image/width=1080,format=auto,quality=80/https://crumbl.video/ea5ebf84-f31f-45e1-a414-db29ab2d95bb_LemonCake_LTO_FlyingAerial_TECH.png"
                                style={{ color: 'transparent' }}
                            />
                            <img
                                id="cookieImage"
                                alt="Lemon Cake"
                                loading="lazy"
                                width={650}
                                height={650}
                                decoding="async"
                                data-nimg={1}
                                className="hidden xl:flex"
                                srcSet="https://crumbl.video/cdn-cgi/image/width=750,format=auto,quality=80/https://crumbl.video/ea5ebf84-f31f-45e1-a414-db29ab2d95bb_LemonCake_LTO_FlyingAerial_TECH.png 1x, https://crumbl.video/cdn-cgi/image/width=1920,format=auto,quality=80/https://crumbl.video/ea5ebf84-f31f-45e1-a414-db29ab2d95bb_LemonCake_LTO_FlyingAerial_TECH.png 2x"
                                src="https://crumbl.video/cdn-cgi/image/width=1920,format=auto,quality=80/https://crumbl.video/ea5ebf84-f31f-45e1-a414-db29ab2d95bb_LemonCake_LTO_FlyingAerial_TECH.png"
                                style={{ color: 'transparent' }}
                            />
                            <div className="mx-4 block md:mx-[75px] md:text-left">
                                <div className="hidden md:block">
                                    <p className="text-[18px] leading-[20px] font-bold 2xl:text-[20px] 2xl:leading-[22px]">Served Chilled</p>
                                    <p className="pt-2.5 text-[34px] leading-[40px] font-extrabold md:py-2.5 lg:text-[46px] lg:leading-[46px] 2xl:text-[55px] 2xl:leading-[65px]">
                                        Lemon Cake
                                    </p>
                                    <p className="text-xl text-[14px] leading-6 leading-[18px] font-normal md:max-w-[700px] 2xl:text-[16px] 2xl:leading-[20px]">
                                        A double layer of tender lemon cake, stacked with lemon curd and lemon cream cheese frosting, then garnished
                                        with a fresh lemon slice
                                    </p>
                                </div>
                                <div className="md:hidden">
                                    <p className="text-xs leading-4 font-normal">Served Chilled</p>
                                    <p className="text-[44px] leading-[50px] font-extrabold lg:text-[60px] lg:leading-[66px] 2xl:text-[75px] 2xl:leading-[80px]">
                                        Lemon Cake
                                    </p>
                                    <p className="text-[14px] leading-[18px] font-normal 2xl:text-[16px] 2xl:leading-[20px]">
                                        A double layer of tender lemon cake, stacked with lemon curd and lemon cream cheese frosting, then garnished
                                        with a fresh lemon slice
                                    </p>
                                </div>
                                <div className="inline-flex w-full flex-col items-center gap-2 pt-[20px] pb-[10px] md:pt-[30px] lg:flex-row">
                                    <a
                                        target=""
                                        className="z-10 inline-flex h-[40px] min-h-[40px] w-full max-w-[400px] flex-nowrap items-center justify-center rounded-full bg-black py-3 pr-[30px] pl-[30px] text-white sm:h-[50px] sm:min-h-[50px]"
                                        href="https://crumblcookies.com/order"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}
                                    >
                                        <div className="flex h-full items-center text-base text-[16px] leading-[20px] font-bold font-semibold text-nowrap 2xl:text-[18px] 2xl:leading-[22px]">
                                            <span style={{ color: 'rgb(0, 0, 0)', filter: 'invert(100%)' }}>Order Now</span>
                                        </div>
                                    </a>
                                    <button
                                        className="inline-flex h-[40px] min-h-[40px] w-full max-w-[400px] flex-nowrap items-center justify-center rounded-full border-[1px] border-black bg-transparent py-3 pr-[30px] pl-[25px] text-black capitalize sm:h-[50px] sm:min-h-[50px]"
                                        style={{ color: 'rgb(0, 0, 0)', border: '1px solid rgb(0, 0, 0)' }}
                                    >
                                        <span className="mr-2">
                                            <svg
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-5"
                                                style={{ color: 'rgb(0, 0, 0)' }}
                                            >
                                                <path
                                                    d="M8.99916 16.1249C8.91083 16.1249 8.82246 16.1065 8.73996 16.069C8.46746 15.9449 2.05417 12.9707 1.02583 7.67405C0.628333 5.62489 1.0275 3.62571 2.09334 2.32737C2.95584 1.27571 4.1958 0.716528 5.67997 0.709028C5.68747 0.709028 5.69497 0.709028 5.70163 0.709028C7.39497 0.709028 8.42751 1.67322 8.99835 2.49405C9.57168 1.66989 10.6125 0.701528 12.3166 0.709028C13.8016 0.716528 15.0425 1.27571 15.9058 2.32737C16.97 3.62488 17.3683 5.62403 16.9699 7.67487C15.9433 12.9715 9.52913 15.9466 9.25663 16.0699C9.17579 16.1066 9.08749 16.1249 8.99916 16.1249ZM5.70082 1.95821C5.69582 1.95821 5.69168 1.95821 5.68668 1.95821C4.57168 1.96321 3.68837 2.35403 3.06003 3.11987C2.22753 4.13403 1.92668 5.74738 2.25335 7.43571C3.04918 11.539 7.82666 14.2057 8.99916 14.804C10.1717 14.2057 14.9492 11.539 15.7442 7.43571C16.0725 5.74655 15.7717 4.1332 14.9408 3.11987C14.3125 2.35487 13.4291 1.96486 12.3116 1.95903C12.3066 1.95903 12.3017 1.95903 12.2975 1.95903C10.3208 1.95903 9.62004 3.93988 9.59171 4.02405C9.50504 4.27655 9.26664 4.44819 8.99997 4.44819C8.99831 4.44819 8.99745 4.44819 8.99662 4.44819C8.72912 4.44736 8.4908 4.27654 8.4058 4.02237C8.3783 3.93904 7.67665 1.95821 5.70082 1.95821Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        <span className="w-full text-base text-[16px] leading-[20px] font-bold font-semibold text-nowrap 2xl:text-[18px] 2xl:leading-[22px]">
                                            Add to favorites
                                        </span>
                                    </button>
                                </div>
                                <div className="flex w-full justify-center">
                                    <img
                                        id="cookieImage"
                                        alt="Lemon Cake"
                                        loading="lazy"
                                        width={360}
                                        height={360}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mb-[20px] md:hidden"
                                        srcSet="https://crumbl.video/cdn-cgi/image/width=384,format=auto,quality=80/https://crumbl.video/ea5ebf84-f31f-45e1-a414-db29ab2d95bb_LemonCake_LTO_FlyingAerial_TECH.png 1x, https://crumbl.video/cdn-cgi/image/width=750,format=auto,quality=80/https://crumbl.video/ea5ebf84-f31f-45e1-a414-db29ab2d95bb_LemonCake_LTO_FlyingAerial_TECH.png 2x"
                                        src="https://crumbl.video/cdn-cgi/image/width=750,format=auto,quality=80/https://crumbl.video/ea5ebf84-f31f-45e1-a414-db29ab2d95bb_LemonCake_LTO_FlyingAerial_TECH.png"
                                        style={{ color: 'transparent' }}
                                    />
                                </div>
                                <div className="inline-flex w-full flex-col items-center justify-center md:justify-start md:pr-0 lg:flex-row">
                                    <div className="inline-flex items-center pb-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-12 w-12"
                                            style={{ color: 'rgb(0, 0, 0)' }}
                                        >
                                            <path
                                                d="M12.9616 4.59625L14.9036 8.51324C15.0496 8.80824 15.3316 9.01226 15.6586 9.05926L20.1416 9.70721C20.9636 9.82621 21.2916 10.8342 20.6966 11.4122L17.4556 14.5572C17.2186 14.7872 17.1106 15.1182 17.1666 15.4432L17.9076 19.7473C18.0576 20.6203 17.1406 21.2862 16.3546 20.8752L12.4666 18.8403C12.1746 18.6873 11.8266 18.6873 11.5356 18.8403L7.65059 20.8732C6.86359 21.2852 5.94356 20.6182 6.09456 19.7432L6.83565 15.4432C6.89165 15.1182 6.78359 14.7872 6.54659 14.5572L3.30562 11.4122C2.70962 10.8342 3.03755 9.82621 3.86055 9.70721L8.34359 9.05926C8.66959 9.01226 8.95159 8.80824 9.09859 8.51324L11.0406 4.59625C11.4316 3.80125 12.5676 3.80125 12.9616 4.59625Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-12 w-12"
                                            style={{ color: 'rgb(0, 0, 0)' }}
                                        >
                                            <path
                                                d="M12.9616 4.59625L14.9036 8.51324C15.0496 8.80824 15.3316 9.01226 15.6586 9.05926L20.1416 9.70721C20.9636 9.82621 21.2916 10.8342 20.6966 11.4122L17.4556 14.5572C17.2186 14.7872 17.1106 15.1182 17.1666 15.4432L17.9076 19.7473C18.0576 20.6203 17.1406 21.2862 16.3546 20.8752L12.4666 18.8403C12.1746 18.6873 11.8266 18.6873 11.5356 18.8403L7.65059 20.8732C6.86359 21.2852 5.94356 20.6182 6.09456 19.7432L6.83565 15.4432C6.89165 15.1182 6.78359 14.7872 6.54659 14.5572L3.30562 11.4122C2.70962 10.8342 3.03755 9.82621 3.86055 9.70721L8.34359 9.05926C8.66959 9.01226 8.95159 8.80824 9.09859 8.51324L11.0406 4.59625C11.4316 3.80125 12.5676 3.80125 12.9616 4.59625Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-12 w-12"
                                            style={{ color: 'rgb(0, 0, 0)' }}
                                        >
                                            <path
                                                d="M12.9616 4.59625L14.9036 8.51324C15.0496 8.80824 15.3316 9.01226 15.6586 9.05926L20.1416 9.70721C20.9636 9.82621 21.2916 10.8342 20.6966 11.4122L17.4556 14.5572C17.2186 14.7872 17.1106 15.1182 17.1666 15.4432L17.9076 19.7473C18.0576 20.6203 17.1406 21.2862 16.3546 20.8752L12.4666 18.8403C12.1746 18.6873 11.8266 18.6873 11.5356 18.8403L7.65059 20.8732C6.86359 21.2852 5.94356 20.6182 6.09456 19.7432L6.83565 15.4432C6.89165 15.1182 6.78359 14.7872 6.54659 14.5572L3.30562 11.4122C2.70962 10.8342 3.03755 9.82621 3.86055 9.70721L8.34359 9.05926C8.66959 9.01226 8.95159 8.80824 9.09859 8.51324L11.0406 4.59625C11.4316 3.80125 12.5676 3.80125 12.9616 4.59625Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-12 w-12"
                                            style={{ color: 'rgb(0, 0, 0)' }}
                                        >
                                            <path
                                                d="M12.9616 4.59625L14.9036 8.51324C15.0496 8.80824 15.3316 9.01226 15.6586 9.05926L20.1416 9.70721C20.9636 9.82621 21.2916 10.8342 20.6966 11.4122L17.4556 14.5572C17.2186 14.7872 17.1106 15.1182 17.1666 15.4432L17.9076 19.7473C18.0576 20.6203 17.1406 21.2862 16.3546 20.8752L12.4666 18.8403C12.1746 18.6873 11.8266 18.6873 11.5356 18.8403L7.65059 20.8732C6.86359 21.2852 5.94356 20.6182 6.09456 19.7432L6.83565 15.4432C6.89165 15.1182 6.78359 14.7872 6.54659 14.5572L3.30562 11.4122C2.70962 10.8342 3.03755 9.82621 3.86055 9.70721L8.34359 9.05926C8.66959 9.01226 8.95159 8.80824 9.09859 8.51324L11.0406 4.59625C11.4316 3.80125 12.5676 3.80125 12.9616 4.59625Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-12 w-12"
                                            style={{ color: 'rgb(0, 0, 0)' }}
                                        >
                                            <path
                                                d="M20.7497 11.41C21.3397 10.84 21.0096 9.83002 20.1896 9.71002L15.7096 9.06C15.3796 9.01 15.0996 8.81001 14.9496 8.51001L13.0097 4.59998C12.8197 4.19998 12.4297 4 12.0497 4C11.6697 4 11.2796 4.19998 11.0896 4.59998L9.14967 8.51001C8.99967 8.81001 8.71966 9.01 8.38966 9.06L3.90969 9.71002C3.08969 9.83002 2.75963 10.84 3.34963 11.41L6.59962 14.56C6.82962 14.79 6.93965 15.12 6.87965 15.44L6.13967 19.75C6.01967 20.44 6.5696 21 7.1996 21C7.3596 21 7.5296 20.96 7.6996 20.88L11.5796 18.84C11.7296 18.76 11.8897 18.73 12.0497 18.73C12.2097 18.73 12.3697 18.76 12.5197 18.84L16.3997 20.88C16.5697 20.96 16.7397 21 16.8997 21C17.5297 21 18.0796 20.44 17.9596 19.75L17.2196 15.44C17.1596 15.12 17.2697 14.79 17.4997 14.56L20.7497 11.41ZM16.4596 13.48C15.8696 14.06 15.5996 14.89 15.7396 15.7L16.3296 19.14L13.2096 17.51C12.8496 17.32 12.4497 17.23 12.0497 17.23V6.03003L13.6096 9.17999C13.9796 9.91999 14.6796 10.43 15.4896 10.54L18.9696 11.05L16.4596 13.48Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="inline-flex items-center gap-x-2 md:pl-2">
                                        <p className="text-[14px] leading-[18px] font-bold text-nowrap 2xl:text-[16px] 2xl:leading-[20px]">
                                            4.45 avg rating
                                        </p>
                                        <div style={{ color: 'rgb(0, 0, 0)' }}>|</div>
                                        <p className="text-[13px] leading-[15px] font-normal text-nowrap 2xl:text-[14px] 2xl:leading-[16px]">
                                            22,533 reviews
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[20px] w-full md:h-[90px]">
                            <img
                                alt="Lemon Cake"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="-mb-[1px] hidden w-full xl:block"
                                sizes="100vw"
                                srcSet="https://crumbl.video/cdn-cgi/image/width=640,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-lg.2258ad96.png 640w, https://crumbl.video/cdn-cgi/image/width=750,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-lg.2258ad96.png 750w, https://crumbl.video/cdn-cgi/image/width=828,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-lg.2258ad96.png 828w, https://crumbl.video/cdn-cgi/image/width=1080,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-lg.2258ad96.png 1080w, https://crumbl.video/cdn-cgi/image/width=1200,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-lg.2258ad96.png 1200w, https://crumbl.video/cdn-cgi/image/width=1920,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-lg.2258ad96.png 1920w, https://crumbl.video/cdn-cgi/image/width=2048,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-lg.2258ad96.png 2048w, https://crumbl.video/cdn-cgi/image/width=3840,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-lg.2258ad96.png 3840w"
                                src="https://crumbl.video/cdn-cgi/image/width=3840,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-lg.2258ad96.png"
                                style={{
                                    position: 'absolute',
                                    height: '100%',
                                    width: '100%',
                                    inset: 0,
                                    color: 'transparent',
                                }}
                            />
                            <img
                                alt="Lemon Cake"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="-mb-[1px] hidden w-full md:block"
                                sizes="100vw"
                                srcSet="https://crumbl.video/cdn-cgi/image/width=640,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-sm.417370b1.png 640w, https://crumbl.video/cdn-cgi/image/width=750,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-sm.417370b1.png 750w, https://crumbl.video/cdn-cgi/image/width=828,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-sm.417370b1.png 828w, https://crumbl.video/cdn-cgi/image/width=1080,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-sm.417370b1.png 1080w, https://crumbl.video/cdn-cgi/image/width=1200,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-sm.417370b1.png 1200w, https://crumbl.video/cdn-cgi/image/width=1920,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-sm.417370b1.png 1920w, https://crumbl.video/cdn-cgi/image/width=2048,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-sm.417370b1.png 2048w, https://crumbl.video/cdn-cgi/image/width=3840,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-sm.417370b1.png 3840w"
                                src="https://crumbl.video/cdn-cgi/image/width=3840,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-sm.417370b1.png"
                                style={{
                                    position: 'absolute',
                                    height: '100%',
                                    width: '100%',
                                    inset: 0,
                                    color: 'transparent',
                                }}
                            />
                            <img
                                alt="Lemon Cake"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="-mb-[1px] w-full md:hidden"
                                sizes="100vw"
                                srcSet="https://crumbl.video/cdn-cgi/image/width=640,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-xs.bdf979e5.png 640w, https://crumbl.video/cdn-cgi/image/width=750,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-xs.bdf979e5.png 750w, https://crumbl.video/cdn-cgi/image/width=828,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-xs.bdf979e5.png 828w, https://crumbl.video/cdn-cgi/image/width=1080,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-xs.bdf979e5.png 1080w, https://crumbl.video/cdn-cgi/image/width=1200,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-xs.bdf979e5.png 1200w, https://crumbl.video/cdn-cgi/image/width=1920,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-xs.bdf979e5.png 1920w, https://crumbl.video/cdn-cgi/image/width=2048,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-xs.bdf979e5.png 2048w, https://crumbl.video/cdn-cgi/image/width=3840,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-xs.bdf979e5.png 3840w"
                                src="https://crumbl.video/cdn-cgi/image/width=3840,format=auto,quality=80/https://crumblcookies.com/_next/static/media/wave-xs.bdf979e5.png"
                                style={{
                                    position: 'absolute',
                                    height: '100%',
                                    width: '100%',
                                    inset: 0,
                                    color: 'transparent',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </PublicLayout>
        </>
    );
}
