import axios from 'axios'

import LocationType from '../types/location'

export const getLocations = async () => {
    return [
        { map: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3613.8073542448806!2d55.1406664!3d25.0745178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1665798706407!5m2!1sen!2scm", city: 'Dubai', address: 'Al karama, beside Bay tower, office #3210', days: 'Sunday - Monday', hours: '10:00 AM - 11PM', phone: '+971 50 223 1100' },
        { map: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3613.8073542448806!2d55.1406664!3d25.0745178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1665798706407!5m2!1sen!2scm", city: 'Dubai', address: 'Al karama, beside Bay tower', days: 'Sunday - Monday', hours: '10:00 AM - 11PM', phone: '+971 50 223 1100' },
        { map: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3613.8073542448806!2d55.1406664!3d25.0745178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1665798706407!5m2!1sen!2scm", city: 'Dubai', address: 'Al karama, beside Bay tower', days: 'Sunday - Monday', hours: '10:00 AM - 11PM', phone: '+971 50 223 1100' },
    ]
    const res = await axios.get<LocationType[]>('/tutorials')
    return res.data
} 