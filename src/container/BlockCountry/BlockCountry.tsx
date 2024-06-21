import React, {useCallback, useEffect, useState} from 'react';
import {APICountry, Country} from "../../types";
import axios from "axios";
import {URL_ALL_COUNTRIES} from "../../constants";
import CountryName from "../../Components/Country/CountryName";
import "./BlockCountries.css"

const BlockCountry = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    const fetchCountries = useCallback(async () => {
        const {data:countries} = await axios.get<APICountry[]>(URL_ALL_COUNTRIES);
        setCountries(countries)
    }, []);


    useEffect(() => {
        void fetchCountries();
    }, [fetchCountries]);
    return (
        <div className="main-block">
            <div className="block-countries">
                {countries.map(country => (
                    <CountryName name={country.name}></CountryName>
                ))}
            </div>
        </div>
    );
};

export default BlockCountry;