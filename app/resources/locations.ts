import axios from 'axios'

import LocationType from '../types/location'

export const getLocations = async () => {
    return [
        { map: '/images/frontend/contact/map-1.svg', city: 'Dubai', address: 'Al karama, beside Bay tower, office #3210', days: 'Sunday - Monday', hours: '10:00 AM - 11PM', phone: '+971 50 223 1100' },
        { map: '/images/frontend/contact/map-2.svg', city: 'Dubai', address: 'Al karama, beside Bay tower', days: 'Sunday - Monday', hours: '10:00 AM - 11PM', phone: '+971 50 223 1100' },
        { map: '/images/frontend/contact/map-3.svg', city: 'Dubai', address: 'Al karama, beside Bay tower', days: 'Sunday - Monday', hours: '10:00 AM - 11PM', phone: '+971 50 223 1100' },
    ]
    const res = await axios.get<LocationType[]>('/tutorials')
    return res.data
} 