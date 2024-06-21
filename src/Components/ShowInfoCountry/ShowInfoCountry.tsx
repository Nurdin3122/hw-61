import "./ShowInfoCountry.css";

import React, {useCallback, useEffect, useState} from 'react';
import {APIInfoCountry} from "../../types";
import axios from "axios";
import {URL_ONEofTheCOUNTRIES} from "../../constants";

interface Props {
    alphacode:string | null;
}

const ShowInfoCountry:React.FC<Props> = ({alphacode}) => {
    const [infoCountries, setInfoCountries] = useState<null | APIInfoCountry>(null);

    const fetchCountry = useCallback(async () => {
        if (alphacode !== null) {
            const {data:infoCountry} = await axios.get(URL_ONEofTheCOUNTRIES + alphacode);
            setInfoCountries(infoCountry)
        }
    }, [alphacode]);

    useEffect(() => {
        void fetchCountry();
    }, [fetchCountry]);

    const borders = [infoCountries?.borders];
    return (
        <div className="block-info-country">
            <div className="header">
                <div className="block-1-info-country">
                    <h2>{infoCountries?.name}</h2>
                    <p>capital:{infoCountries?.capital}</p>
                    <p>population:{infoCountries?.population}</p>
                </div>

                <div className="flag-block">
                    <img className="flag" src={infoCountries?.flag}/>
                </div>

            </div>

            <div className="block-2-info-country">
                <h3>Borders with:</h3>
                <ul>
                    {infoCountries?.borders && infoCountries.borders.length > 0 ? (
                        infoCountries.borders.map((border, index) => (
                          <li key={index}>{border}</li>
                      ))
                  ) : (
                      <li>Границ нет</li>
                  )}
              </ul>
            </div>
        </div>
    );
};

export default ShowInfoCountry;