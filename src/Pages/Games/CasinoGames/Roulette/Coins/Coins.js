import { React, useState, useEffect } from "react";
import styles from "../Roulette.module.css";

function debounce(fn, ms) {
    let timer;
    return (_) => {
        clearTimeout(timer);
        timer = setTimeout((_) => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

const Coins = (props) => {
    const bet = props.bet;
    const divInfo = bet.target.getBoundingClientRect();
    const x = divInfo.x + window.pageXOffset + divInfo.width / 2;
    const y = divInfo.y + window.pageYOffset + divInfo.height / 2;
    const [filteredCoins, setFilteredCoins] = useState([]);
    const [location, setLocation] = useState({ x, y });

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            const divInfo = bet.target.getBoundingClientRect();

            const x = divInfo.x + window.pageXOffset + divInfo.width / 2;
            const y = divInfo.y + window.pageYOffset + divInfo.height / 2;

            setLocation({ x, y });
        }, 100);
        window.addEventListener("resize", debouncedHandleResize);
        return (_) => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    useEffect(() => {
        let amount = bet.amount;
        let coins = [];

        while (amount.gte(500)) {
            coins.unshift(styles.indigoChip);
            amount = amount.sub(500);
        }

        while (amount.gte(25)) {
            coins.unshift(styles.greenChip);
            amount = amount.sub(25);
        }

        while (amount.gte(10)) {
            coins.unshift(styles.blueChip);
            amount = amount.sub(10);
        }

        while (amount.gte(5)) {
            coins.unshift(styles.redChip);
            amount = amount.sub(5);
        }

        while (amount.gte(1)) {
            coins.unshift(styles.whiteChip);
            amount = amount.sub(1);
        }

        while (amount.gte(0.1)) {
            coins.unshift(styles.purpleChip);
            amount = amount.sub(0.1);
        }

        setFilteredCoins(coins);
    }, [bet]);

    return (
        <>
            {filteredCoins.map((coin, index) => {
                return (
                    <div
                        key={index}
                        className={`${styles.coins} ${coin}`}
                        style={{ top: `${location.y - index * 4}px`, left: `${location.x}px` }}
                    ></div>
                );
            })}
        </>
    );
};

export default Coins;
