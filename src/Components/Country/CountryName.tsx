import React from 'react';
import "./CountryName.css"

interface Props {
    name:string;
    onClick:React.MouseEventHandler;
}

const CountryName:React.FC<Props> = ({name,onClick}) => {
    return (
        <div className="block-country" onClick={onClick}>
            <a href="#" className="linkCountry"><p>{name}</p></a>

        </div>
    );
};

export default CountryName;