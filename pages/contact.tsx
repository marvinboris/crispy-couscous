import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ReactElement, useState, useEffect } from 'react'

import { NextPageWithLayout } from './_app'
import { getLocations } from '../app/resources/locations'
import LocationType from '../app/types/location'
import Layout, { Head } from '../components/frontend/navigation/Layout'
import SocialNetworks from '../components/frontend/navigation/Footer/SocialNetworks'
import PageTitle from '../components/frontend/ui/title/page'

const params = {
    link: '/contact',
    title: "Contact Us | Valyou",
    description: "Your favorite e-commerce platform: how to contact us?"
}

const Location = ({ address, city, days, hours, map, phone }: LocationType) => <div>
    <div className='w-[208px] md:w-auto'>
        <div className="ratio-4by3 rounded-[27.759px] shadow-lg overflow-hidden mb-[18.51px]">
            <iframe src={map} className="w-full h-full absolute inset-0" />
        </div>

        <div className="md:pr-[58.1px] space-y-2">
            <div><span className="font-bold">{city}</span> - {address}</div>

            <div><span className="font-bold">Timings :</span><br />{days}<br />{hours}</div>

            <div><span className="font-bold">Phone :</span><br />{phone}</div>
        </div>
    </div>
</div>

const ContactUsPage: NextPageWithLayout = () => {
    const [locations, setLocations] = useState<LocationType[] | null>(null)

    useEffect(() => {
        if (!locations) getLocations().then(locations => setLocations(locations))
    }, [])

    const locationsContent = locations !== null && locations.map(location => <Location key={'location-' + location.map} {...location} />)

    return <>
        <Head {...params} />
        <main>
            <section id="contact" className="min-h-screen pt-[148px] md:pt-[133px]">
                <div className="container">
                    <PageTitle title='Contact Us' />

                    <div className="flex flex-wrap justify-between">
                        <div className="order-2 md:order-1 w-full md:w-3/4 mt-[31px] md:mt-0 pb-[49px] md:pb-0">
                            <div className="text-2xl font-bold mb-5">Shop Location</div>

                            <div className="flex items-stretch -mx-6 px-6 md:mx-0 md:px-0 pb-5 md:pb-0 w-screen md:w-auto overflow-x-auto space-x-[22px] md:space-x-0 md:grid md:gap-5 md:grid-cols-3">
                                {locationsContent}
                            </div>
                        </div>

                        <div className="order-1 md:order-2 w-full md:w-1/4 md:mt-[52px] md:pl-[90px]">
                            <div className='space-y-6'>
                                <div className="flex">
                                    <div>
                                        <div className="w-12">
                                            <MapPinIcon className='text-primary w-7' />
                                        </div>
                                    </div>

                                    <div>
                                        Dubai - United Arab Emirates
                                        Business bay, prime tower
                                        office No. #3490
                                    </div>
                                </div>

                                <div className="flex">
                                    <div>
                                        <div className="w-12">
                                            <EnvelopeIcon className='text-primary w-7' />
                                        </div>
                                    </div>

                                    <div>contact@valyouae.com</div>
                                </div>

                                <div className="flex">
                                    <div>
                                        <div className="w-12">
                                            <PhoneIcon className='text-primary w-7' />
                                        </div>
                                    </div>

                                    <div>+971 50 999 0003 / 50 444 0202</div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <SocialNetworks />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}

ContactUsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default ContactUsPage