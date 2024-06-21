import React from 'react';
import "./CountryName.css"

interface Props {
    name:string;
}

const CountryName:React.FC<Props> = ({name}) => {
    return (
        <div className="block-country">
            <p>{name}</p>
        </div>
    );
};

export default CountryName;