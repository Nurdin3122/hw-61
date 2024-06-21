import React, {useCallback, useEffect, useState} from 'react';
import {APICountry, Country} from "../../types";
import axios from "axios";
import {URL_ALL_COUNTRIES} from "../../constants";
import CountryName from "../../Components/Country/CountryName";
import "./BlockCountries.css"
import ShowInfoCountry from "../../Components/ShowInfoCountry/ShowInfoCountry";

const BlockCountry = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [codeCountries, setCodeCountries] = useState<null | string>(null)

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
                    <CountryName
                        key={country.alpha3Code}
                        name={country.name}
                        onClick={() => setCodeCountries(country.alpha3Code)}
                    />
                ))}
            </div>
            <ShowInfoCountry alphacode={codeCountries}/>
        </div>
    );
};

export default BlockCountry;