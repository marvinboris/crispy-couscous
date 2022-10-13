import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ReactElement, useState, useEffect } from 'react'

import { NextPageWithLayout } from './_app'
import { getLocations } from '../app/resources/locations'
import LocationType from '../app/types/location'
import Layout, { Head } from '../components/frontend/navigation/Layout'
import SocialNetworks from '../components/frontend/navigation/Footer/SocialNetworks'

const params = {
    link: '/contact',
    title: "Contact Us | Valyou",
    description: "Your favorite e-commerce platform: how to contact us?"
}

const Location = ({ address, city, days, hours, map, phone }: LocationType) => <div>
    <div className="ratio-4by3 rounded-[27.759px] shadow-lg overflow-hidden mb-[18.51px]">
        <img src={map} alt="Location image" className="absolute inset-0 scale-125 image-cover" />
    </div>

    <div className="pr-[58.1px] space-y-2">
        <div><span className="font-bold">{city}</span> - {address}</div>

        <div><span className="font-bold">Timings :</span><br />{days}<br />{hours}</div>

        <div><span className="font-bold">Phone :</span><br />{phone}</div>
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
            <section id="contact" className="min-h-screen pt-[133px]">
                <div className="container">
                    <div className='mb-[30px] -ml-[19px] relative flex items-center'>
                        <div className='mr-[9px]'>
                            <img src="/images/dots.svg" alt="Dots" />
                        </div>

                        <div>
                            <div className='font-bold mb-[5px] text-5xl'>
                                Contact Us
                            </div>

                            <div>
                                <span className='opacity-20'>Home /</span> Contact Us
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="w-3/4">
                            <div className="text-2xl font-bold mb-5">Shop Location</div>

                            <div className="grid gap-5 grid-cols-3">
                                {locationsContent}
                            </div>
                        </div>

                        <div className="w-1/4 mt-[52px] pl-[90px]">
                            <div className='space-y-6'>
                                <div className="flex">
                                    <div>
                                        <div className="w-12">
                                            <MapPinIcon className='text-primary-600 w-7' />
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
                                            <EnvelopeIcon className='text-primary-600 w-7' />
                                        </div>
                                    </div>

                                    <div>contact@valyouae.com</div>
                                </div>

                                <div className="flex">
                                    <div>
                                        <div className="w-12">
                                            <PhoneIcon className='text-primary-600 w-7' />
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