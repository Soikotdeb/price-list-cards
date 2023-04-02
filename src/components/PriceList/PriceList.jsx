import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch("Prices.json")
            .then((res) => res.json())
            .then((data) => setPrices(data));
    }, []);

    return (
        <div className="mx-12 mt-4">
            <h2 className="text-5xl text-center text-purple-900 bg-purple-300 font-bold">
                Awesome Affordable Prices
            </h2>
            <div className="grid md:grid-cols-3 gap-3">
                {prices.map((price) => (
                    <PriceCard key={price.id} price={price}></PriceCard>
                ))}
            </div>
        </div>
    );
};

export default PriceList;
