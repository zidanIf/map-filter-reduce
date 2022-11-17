import React from 'react';

const Role = [
    {
        User : "digie",
        Rules  : "Support",
        Age  : 19
    },
    {
        User : "Ling",
        Rules : "Asassin",
        Age  : 24
    },
    {
        User : "Florin",
        Rules : "Support",
        Age  : 20
    },
]
const Jumlahu = Role.reduce((Totalu, Role) => Totalu+Role.Age, 0);

const Map = () => {
    return(
        <div>
            <h4>Learn map in Jsx</h4>
            <ul>
                {Role.map((Role) =>
                <li>{Role.User}</li>
                )}
            </ul>
            <h4>map filter</h4>
            <ul>
                {
                Role.filter(Role => Role.Age < 20)
                .map(Role => (
                    <li>
                        {Role.Age}
                        
                    </li>
                ))
                }
            </ul>
            <h3>jumlah umur : {Jumlahu}</h3>
        </div>
    )
}
export default Map;
