import axios from "axios";

import CountryType from "../types/country";

export const getCountries = async () => {
    const CORS = "https://api.allorigins.win/get?url="
    let countries: CountryType[]

    try {
        const phoneRes = await axios<{ contents: string }>(CORS + 'http://country.io/phone.json');
        const namesRes = await axios<{ contents: string }>(CORS + 'http://country.io/names.json');

        const phoneData = await phoneRes.data;
        const namesData = await namesRes.data;

        const phone = JSON.parse(phoneData.contents) as { [key: string]: string };
        const names = JSON.parse(namesData.contents) as { [key: string]: string };

        countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] }));
        countries = countries.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
        countries = [];
        console.log(error);
    }

    return countries
}