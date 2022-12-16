import { AdjustmentsHorizontalIcon, ArrowLeftIcon, ArrowRightIcon, CalendarDaysIcon, MagnifyingGlassIcon, TicketIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { ComponentProps, ReactElement, useState, useEffect } from 'react'

import { NextPageWithLayout } from './_app'
import { getProducts } from '../app/resources/products'
import ProductType from '../app/types/product'
import Layout, { Head } from '../components/frontend/navigation/Layout'
import { classNames } from '../app/helpers/utils'
import Button from '../components/frontend/ui/form/Button'

const params = {
    link: '/products',
    title: "Products | Valyou",
    description: "Your favorite e-commerce platform: get all the products you need"
}

const SectionTitle = ({ children, className }: ComponentProps<'div'>) => <div className={className}>
    <div className='flex items-center justify-between'>
        <h2 className='text-[28px] font-bold text-secondary-800'>{children}</h2>

        <div className='space-x-[18px] flex'>
            <button className="rounded-full flex-none w-12 h-12 flex items-center justify-center text-primary bg-primary/10"><ArrowLeftIcon className='flex-none w-6' /></button>
            <button className="rounded-full flex-none w-12 h-12 flex items-center justify-center text-white bg-primary"><ArrowRightIcon className='flex-none w-6' /></button>
        </div>
    </div>
</div>

const Product = ({ expires_at, name, photo, price, tickets, total_tickets, free_ticket }: ProductType) => <div className='flex flex-col justify-center'>
    <div className={classNames("px-[25px] pt-[21px] rounded-[35px] bg-white", free_ticket ? "pb-[28px]" : "pb-11")}>
        <div className="px-3 py-[7px] rounded-full inline-flex items-center space-x-2.5 bg-green/10 text-green text-xs">
            <div className='font-medium'>{tickets} <span className='font-bold'>/ {total_tickets}</span> tickets</div>

            <div><TicketIcon className='w-3' /></div>
        </div>

        <div className="px-3 py-[7px] inline-block rounded-full bg-red/10 text-red text-xs mt-2.5">
            Expires in <span className='font-bold'>{Math.floor((expires_at.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000))} days</span>
        </div>

        <div className="mt-4 h-[106px]">
            <div className="aspect-square w-[106px] mx-auto relative">
                <Image layout='fill' src={photo} alt={name} className="image-cover" />
            </div>
        </div>

        <div className="mt-[7px] h-12">{name}</div>

        <div className="mt-[5px] font-bold">{price.toFixed(2)} AED</div>

        {free_ticket ? <Button size='sm' className='mt-6 block w-full'><div className='text-sm font-bold space-x-2.5'><span>Get free ticket</span><TicketIcon className='w-5 opacity-30 inline-block' /></div></Button> : null}
    </div>
</div>

const ProductsPage: NextPageWithLayout = () => {
    const [products, setProducts] = useState<ProductType[] | null>(null)

    useEffect(() => {
        if (!products) getProducts().then(products => setProducts(products))
    }, [])

    const topProductsContent = products !== null && products.map((product, index) => index === 1 ? { ...product, free_ticket: true } : product).map(product => <Product key={'product-' + product.name} {...product} />)
    const botProductsContent = products !== null && products.map(product => <Product key={'product-' + product.name} {...product} />)

    return <>
        <Head {...params} />
        <main className='bg-secondary-50'>
            <section id="products" className="min-h-screen pt-[148px] md:pt-[133px] pb-[222px]">
                <div className="container">
                    <div className="rounded-[20px] relative py-[72px] pl-40 pr-[205px] flex justify-between text-white overflow-hidden z-0">
                        <Image layout='fill' src='/images/home-banner.svg' alt='Draw Banner' className='image-cover absolute inset-0 -z-20' />
                        <div className='absolute inset-0 bg-black/50 -z-10' />

                        <div className='text-[35px] font-bold'>Draw starting soon !</div>

                        <div className='space-x-[14px] flex'>
                            <div className="w-[58px] h-[58px] rounded-[12px] flex flex-col items-center bg-white/20 border-[0.5px] border-white backdrop-filter backdrop-blur-[2px]"><span className='text-[25px] font-bold'>05</span><span className='text-xs'>Days</span></div>
                            <div className="w-[58px] h-[58px] rounded-[12px] flex flex-col items-center bg-white/20 border-[0.5px] border-white backdrop-filter backdrop-blur-[2px]"><span className='text-[25px] font-bold'>16</span><span className='text-xs'>Hours</span></div>
                            <div className="w-[58px] h-[58px] rounded-[12px] flex flex-col items-center bg-white/20 border-[0.5px] border-white backdrop-filter backdrop-blur-[2px]"><span className='text-[25px] font-bold'>34</span><span className='text-xs'>Minutes</span></div>
                            <div className="w-[58px] h-[58px] rounded-[12px] flex flex-col items-center bg-white/20 border-[0.5px] border-white backdrop-filter backdrop-blur-[2px]"><span className='text-[25px] font-bold'>56</span><span className='text-xs'>Seconds</span></div>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-between">
                        <div className="flex space-x-4">
                            <div className="h-[60px] w-[293px] rounded-[12px] bg-white flex-none flex items-center text-sm pr-6">
                                <div className="w-[60px] flex-none"><MagnifyingGlassIcon className='w-5 mx-auto text-secondary-300' /></div>

                                <select name="search" id="search" className='flex-1'>
                                    <option value="">Search products...</option>
                                </select>
                            </div>

                            <div className="h-[60px] rounded-[12px] bg-primary/10 flex-none flex items-center pl-[25px] pr-3.5 text-sm text-secondary-800">
                                <span>From</span>
                                <span className='font-bold ml-2.5'>5 - 65 AED</span>
                                <button className="inline-flex ml-3 w-5 h-5 rounded bg-red items-center justify-center"><XMarkIcon className='w-3 flex-none text-white' /></button>
                            </div>

                            <div className="h-[60px] rounded-[12px] bg-primary/10 flex-none flex items-center pl-[25px] pr-3.5 text-sm text-secondary-800">
                                <span>Price</span>
                                <span className='font-bold ml-2.5'>Low to high</span>
                                <button className="inline-flex ml-3 w-5 h-5 rounded bg-red items-center justify-center"><XMarkIcon className='w-3 flex-none text-white' /></button>
                            </div>

                            <div className="h-[60px] rounded-[12px] bg-primary/10 flex-none flex items-center pl-5 pr-[30px] text-sm text-secondary-800">
                                <CalendarDaysIcon className='flex-none text-primary/20 w-6' />
                                <span className='ml-4'>Ending date</span>
                            </div>
                        </div>

                        <button className="flex-none h-[60px] w-[190px] space-x-[18px] rounded-[12px] flex items-center justify-center bg-primary text-white"><span className='font-medium text-sm'>Reset filters</span><AdjustmentsHorizontalIcon className='w-5' /></button>
                    </div>

                    <div className='mt-10'>
                        <SectionTitle>Opening soon - draw products</SectionTitle>

                        <div className='mt-8 grid grid-cols-4 gap-[28px]'>
                            {topProductsContent}
                        </div>
                    </div>

                    <div className='mt-[88px]'>
                        <SectionTitle>Ending soon - draw products</SectionTitle>

                        <div className='mt-8 grid grid-cols-4 gap-[28px]'>
                            {botProductsContent}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout light>{page}</Layout>
}

export default ProductsPage