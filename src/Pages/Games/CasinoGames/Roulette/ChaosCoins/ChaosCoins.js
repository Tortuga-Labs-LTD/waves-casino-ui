import { React, useState, useEffect } from 'react';
import styles from './ChaosCoins.module.css';

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

const ChaosCoins = (props) => {
    const amount = props.amount
    const location = props.location
    const divInfo = document.getElementById(location).getBoundingClientRect()
	const x = (divInfo.x + window.pageXOffset) + divInfo.width / 2
	const y = (divInfo.y + window.pageYOffset) + divInfo.height / 2
    const [coin, setCoin] = useState({x, y})
    const [filteredAmount, setFilteredAmount] = useState('0')

    useEffect(() => {

        const debouncedHandleResize = debounce(function handleResize() {
            const divInfo = document.getElementById(location).getBoundingClientRect()
            const x = (divInfo.x + window.pageXOffset) + divInfo.width / 2
	        const y = (divInfo.y + window.pageYOffset) + divInfo.height / 2
        
            setCoin({x, y})
        }, 100)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }

    }, [location])

    useEffect(() => {
        
        const round = (num) => {
            num = num.toString();
            return num.slice(0, (num.indexOf("."))+3);
        }

        if (amount < 0.0001) setFilteredAmount(`${amount.toExponential()}`)
        if (0.00009 < amount && amount < 1000) setFilteredAmount(`${amount}`)
        if (999 < amount && amount < 1000000) setFilteredAmount(`${round(amount/1000)}K`)
        if (999999 < amount && amount < 1000000000) setFilteredAmount(`${round(amount/1000000)}M`)
        
    }, [amount])
      
    return (
        <>
            <div className={styles.coin} style={{top: `${coin.y}px`, left: `${coin.x}px`}}>{filteredAmount}</div>
        </>
    );
};




export default ChaosCoins