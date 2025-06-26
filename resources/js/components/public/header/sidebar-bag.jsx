import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/react';
export default function ({ bagMenuOpen, setBagMenuOpen }) {
    return (
        <Dialog open={bagMenuOpen} onClose={setBagMenuOpen} className="">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Crumbl</span>
                        <img alt="" src="/logo.svg" className="h-8 w-auto" />
                    </a>
                    <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div id="cart" className="relative flex h-full w-full flex-col overflow-y-hidden lg:gap-[20px]">
                    <div className="bg-primary flex items-center justify-between px-[30px] pt-[30px] pb-[10px] lg:bg-white">
                        <p
                            className="text-[34px] leading-[40px] font-extrabold lg:text-[46px] lg:leading-[46px] 2xl:text-[55px] 2xl:leading-[65px]"
                            tabIndex={0}
                            role="text"
                        >
                            My Bag
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={34}
                            height={34}
                            fill="none"
                            viewBox="0 0 24 24"
                            className="hidden cursor-pointer lg:block"
                            tabIndex={0}
                            aria-label="Close Bag"
                            role="button"
                        >
                            <path
                                fill="currentColor"
                                d="m13.414 12 5.293-5.293a.999.999 0 1 0-1.414-1.414L12 10.586 6.707 5.293a.999.999 0 1 0-1.414 1.414L10.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414L12 13.414l5.293 5.293a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414z"
                            />
                        </svg>
                    </div>
                    <div className="relative flex h-full w-full flex-col gap-[15px] overflow-x-hidden overflow-y-auto px-[15px] py-[15px] pb-[250px] md:px-[30px] lg:py-0">
                        <div className="flex flex-col gap-[15px] lg:hidden">
                            <div className="flex flex-col items-start gap-2.5 lg:hidden">
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-[5px]">
                                        <button className="flex w-full items-center gap-x-[5px] hover:cursor-default">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    d="m5.53 3.53-2 2a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.061l2-2A.75.75 0 1 1 5.53 3.53m15.995.934-2-1.96a.751.751 0 0 0-1.05 1.072l2 1.96a.75.75 0 0 0 1.06-.01.75.75 0 0 0-.01-1.062m-4.922 14.073 1.929 1.934a.75.75 0 0 1-1.062 1.06l-2.218-2.225a7.96 7.96 0 0 1-6.5 0L6.533 21.53a.75.75 0 0 1-1.062-1.06L7.4 18.537A7.99 7.99 0 0 1 4.003 12a8 8 0 0 1 16 0 8 8 0 0 1-3.4 6.537M14.53 13.51l-1.78-1.78V8.041a.75.75 0 0 0-1.5 0v4c0 .199.079.39.22.53l2 2a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <p className="truncate text-[16px] leading-[20px] font-normal 2xl:text-[18px] 2xl:leading-[22px]">
                                                <span className="text-[18px] leading-[20px] font-bold 2xl:text-[20px] 2xl:leading-[22px]">Today</span>{' '}
                                                - 8:00 am
                                            </p>
                                            <div className="bg-primary-light flex hidden h-min w-fit min-w-max items-center justify-center rounded-[5px] px-[10px] py-[4px]">
                                                <p className="text-[0.815rem] leading-4 font-bold">Preorder</p>
                                            </div>
                                        </button>
                                    </div>
                                    <button className="text-grey-60 w-fit justify-center pr-0 pl-0 underline underline-offset-2 lg:hidden">
                                        <p className="text-base text-[16px] leading-[20px] font-bold font-normal text-nowrap 2xl:text-[18px] 2xl:leading-[22px]">
                                            Edit
                                        </p>
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="flex w-full items-center gap-x-[5px] hover:cursor-default">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M20 13.08V18q0 3-3 3h-2.67a.3.3 0 0 1-.3-.3v-3.078c0-.997-.675-1.927-1.658-2.093A2.005 2.005 0 0 0 10.03 17.5v3.2a.3.3 0 0 1-.3.3H7q-3 0-3-3v-4.92c.59.28 1.24.42 1.9.42 1.14 0 2.23-.4 3.07-1.06.84.66 1.92 1.06 3.03 1.06 1.12 0 2.2-.4 3.04-1.06.84.66 1.93 1.06 3.07 1.06.65 0 1.3-.14 1.89-.42M7.5 3C5 3 4.617 3.82 4.205 5.038l-1.04 3.073c-.438 1.294.005 2.791 1.199 3.481.449.26.974.408 1.535.408 1.33 0 2.639-.83 3.055-2 .406 1.17 1.715 2 3.045 2s2.639-.83 3.045-2c.416 1.17 1.726 2 3.055 2 .562 0 1.086-.148 1.535-.408 1.194-.69 1.637-2.187 1.199-3.481l-1.04-3.073C19.383 3.82 19 3 16.5 3z"
                                            />
                                        </svg>
                                        <p className="truncate text-[16px] leading-[20px] font-normal 2xl:text-[18px] 2xl:leading-[22px]">
                                            <span className="text-[18px] leading-[20px] font-bold 2xl:text-[20px] 2xl:leading-[22px]">Rock Row</span>{' '}
                                            - 95 Rock Row, Ste 160, Westbrook, Maine 04092
                                        </p>
                                        <div className="ml-auto sm:hidden" />
                                    </button>
                                </div>
                            </div>
                            <div className="bg-grey-10 h-[1px] max-h-[1px] w-full" />
                        </div>
                        <div className="mb-[100px] flex flex-col gap-[15px]">
                            <div className="flex flex-col gap-[15px]">
                                <div className="flex flex-col gap-[15px]">
                                    <div className="animate-fadeInSlow flex w-full flex-col">
                                        <div className="relative flex w-full items-start">
                                            <div className="relative flex h-[90px] min-h-[90px] w-[90px] min-w-[90px] items-center justify-center overflow-hidden rounded-lg bg-[#FFB9CD]">
                                                <div
                                                    className="h-full w-full scale-125 md:rounded-2xl"
                                                    aria-label="1 Benson Boone’s Moonbeam Ice Cream Cookie "
                                                    tabIndex={0}
                                                    style={{
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center center',
                                                    }}
                                                >
                                                    <div className="relative m-auto aspect-square h-full">
                                                        <div className="h-full w-full -rotate-12">
                                                            <div className="relative h-full w-full">
                                                                <img
                                                                    alt="box of cookies"
                                                                    loading="lazy"
                                                                    width={400}
                                                                    height={400}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="h-full w-full sm:hidden"
                                                                    srcSet="https://crumbl.video/cdn-cgi/image/width=640,format=auto,quality=80/https://crumblcookies.com/images/v2/cookie-box-1.png 1x, https://crumbl.video/cdn-cgi/image/width=828,format=auto,quality=80/https://crumblcookies.com/images/v2/cookie-box-1.png 2x"
                                                                    src="https://crumbl.video/cdn-cgi/image/width=828,format=auto,quality=80/https://crumblcookies.com/images/v2/cookie-box-1.png"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                                <img
                                                                    alt="box of cookies"
                                                                    loading="lazy"
                                                                    width={400}
                                                                    height={400}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="hidden h-full w-full sm:block"
                                                                    srcSet="https://crumblcookies.com/images/v2/cookie-box-1.svg 1x, https://crumblcookies.com/images/v2/cookie-box-1.svg 2x"
                                                                    src="https://crumblcookies.com/images/v2/cookie-box-1.svg"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                                <div className="absolute top-[51%] left-1/2 aspect-square h-[35%] -translate-x-1/2 -translate-y-1/2">
                                                                    <img
                                                                        alt=""
                                                                        loading="lazy"
                                                                        width={400}
                                                                        height={400}
                                                                        decoding="async"
                                                                        data-nimg={1}
                                                                        className="animate-fadeIn h-full w-full object-contain"
                                                                        srcSet="https://crumbl.video/cdn-cgi/image/width=640,format=auto,quality=80/https://crumbl.video/8be9e776-be13-40e4-81c1-e94524107494_Moonbeam-Ice-Cream_Benson-Logo_Flying-Aerial_Overhead.png 1x, https://crumbl.video/cdn-cgi/image/width=828,format=auto,quality=80/https://crumbl.video/8be9e776-be13-40e4-81c1-e94524107494_Moonbeam-Ice-Cream_Benson-Logo_Flying-Aerial_Overhead.png 2x"
                                                                        src="https://crumbl.video/cdn-cgi/image/width=828,format=auto,quality=80/https://crumbl.video/8be9e776-be13-40e4-81c1-e94524107494_Moonbeam-Ice-Cream_Benson-Logo_Flying-Aerial_Overhead.png"
                                                                        style={{ color: 'transparent' }}
                                                                    />
                                                                </div>
                                                                <img
                                                                    alt="box of cookies lid"
                                                                    loading="lazy"
                                                                    width={400}
                                                                    height={400}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform sm:hidden"
                                                                    srcSet="https://crumbl.video/cdn-cgi/image/width=640,format=auto,quality=80/https://crumblcookies.com/images/v2/cookie-box-lid-1.png 1x, https://crumbl.video/cdn-cgi/image/width=828,format=auto,quality=80/https://crumblcookies.com/images/v2/cookie-box-lid-1.png 2x"
                                                                    src="https://crumbl.video/cdn-cgi/image/width=828,format=auto,quality=80/https://crumblcookies.com/images/v2/cookie-box-lid-1.png"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                                <img
                                                                    alt="box of cookies lid"
                                                                    loading="lazy"
                                                                    width={400}
                                                                    height={400}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="absolute top-1/2 left-1/2 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 transform sm:block"
                                                                    srcSet="https://crumblcookies.com/images/v2/cookie-box-lid-1.svg 1x, https://crumblcookies.com/images/v2/cookie-box-lid-1.svg 2x"
                                                                    src="https://crumblcookies.com/images/v2/cookie-box-lid-1.svg"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ml-[10px] flex flex-grow flex-col">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <p className="text-[16px] leading-[20px] font-bold 2xl:text-[18px] 2xl:leading-[22px]">
                                                            Single
                                                        </p>
                                                        <div className="mt-1 mb-[10px]">
                                                            <div className="flex gap-3">
                                                                <p className="text-[13px] leading-[15px] font-normal 2xl:text-[14px] 2xl:leading-[16px]">
                                                                    $4.49
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="border-opacity-20 inline-flex h-[40px] max-h-[40px] min-h-[40px] w-[110px] max-w-[110px] min-w-[110px] flex-nowrap items-center justify-between rounded-full border-[1px] bg-white py-3 text-black md:min-h-[50px] md:min-w-[159px]">
                                                            <button
                                                                className="p-2 md:p-4"
                                                                data-testid="minus-button"
                                                                aria-label="Delete Item"
                                                                role="button"
                                                            >
                                                                <svg
                                                                    width={20}
                                                                    height={20}
                                                                    viewBox="0 0 20 20"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fillOpacity="0.7"
                                                                >
                                                                    <path
                                                                        d="M19 3.25H15.441C14.54 3.25 14.502 3.136 14.255 2.396L14.053 1.789C13.746 0.869001 12.889 0.25 11.919 0.25H8.08099C7.11099 0.25 6.253 0.868001 5.947 1.789L5.745 2.396C5.498 3.137 5.46 3.25 4.559 3.25H1C0.586 3.25 0.25 3.586 0.25 4C0.25 4.414 0.586 4.75 1 4.75H2.298L3.065 16.249C3.213 18.474 4.57701 19.75 6.80701 19.75H13.194C15.423 19.75 16.787 18.474 16.936 16.249L17.703 4.75H19C19.414 4.75 19.75 4.414 19.75 4C19.75 3.586 19.414 3.25 19 3.25ZM7.37 2.263C7.473 1.956 7.75799 1.75 8.08099 1.75H11.919C12.242 1.75 12.528 1.956 12.63 2.263L12.832 2.87C12.876 3.001 12.92 3.128 12.968 3.25H7.03C7.078 3.127 7.12301 3 7.16701 2.87L7.37 2.263ZM15.438 16.149C15.343 17.582 14.629 18.25 13.193 18.25H6.806C5.37 18.25 4.657 17.583 4.561 16.149L3.801 4.75H4.558C4.683 4.75 4.787 4.737 4.899 4.729C4.933 4.734 4.964 4.75 4.999 4.75H14.999C15.035 4.75 15.065 4.734 15.099 4.729C15.211 4.737 15.315 4.75 15.44 4.75H16.197L15.438 16.149ZM12.75 9V14C12.75 14.414 12.414 14.75 12 14.75C11.586 14.75 11.25 14.414 11.25 14V9C11.25 8.586 11.586 8.25 12 8.25C12.414 8.25 12.75 8.586 12.75 9ZM8.75 9V14C8.75 14.414 8.414 14.75 8 14.75C7.586 14.75 7.25 14.414 7.25 14V9C7.25 8.586 7.586 8.25 8 8.25C8.414 8.25 8.75 8.586 8.75 9Z"
                                                                        fill="currentColor"
                                                                        fillOpacity="0.7"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <p
                                                                className="w-8 text-center text-base font-bold text-nowrap"
                                                                data-testid="quantity"
                                                                tabIndex={0}
                                                                aria-label="Quantity for item: 1"
                                                            >
                                                                1
                                                            </p>
                                                            <button
                                                                className="p-2 md:p-4"
                                                                data-testid="plus-button"
                                                                aria-label="Increase Quantity"
                                                                role="button"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="1em"
                                                                    height="1em"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-grey-40 text-[13px] leading-[15px] font-normal 2xl:text-[14px] 2xl:leading-[16px]">
                                                    1 Benson Boone’s Moonbeam Ice Cream Cookie{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-grey-10 h-[1px] max-h-[1px] w-full" />
                            <div className="flex items-center justify-between" tabIndex={0} role="text">
                                <p className="text-[18px] leading-[20px] font-bold 2xl:text-[20px] 2xl:leading-[22px]">Subtotal</p>
                                <div className="" />
                                <div className="">
                                    <p className="text-[18px] leading-[20px] font-bold 2xl:text-[20px] 2xl:leading-[22px]">$4.49</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed bottom-0 left-0 z-10 flex w-full flex-col items-center gap-[5px] bg-gradient-to-b from-transparent to-white to-50% px-[30px] pt-[15px] pb-[30px] md:absolute">
                        <Link
                            href={route('checkout')}
                            className="hidden inline-flex h-[40px] min-h-[40px] w-fit w-full max-w-[400px] flex-nowrap items-center justify-center rounded-full bg-black py-3 pr-[30px] pl-[30px] text-white sm:h-[50px] sm:min-h-[50px] lg:block"
                        >
                            Checkout
                        </Link>
                        <Link
                            href={route('checkout')}
                            className="inline-flex h-[40px] min-h-[40px] w-fit w-full max-w-[400px] flex-nowrap items-center justify-center rounded-full bg-black py-3 pr-[30px] pl-[30px] text-white sm:h-[50px] sm:min-h-[50px] lg:hidden"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    );
}
