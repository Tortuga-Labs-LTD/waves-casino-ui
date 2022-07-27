
import './style.css';

export function CalculateFee(tx) {
    const headers = {};
    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';
    const body = JSON.stringify(tx);

    return fetch(`${process.env.REACT_APP_NODEURL}/transactions/calculateFee`, {
            method: 'POST',
            headers,
            body
        })
        .then(details => details.json()).then((json) => {
            return json
        })
}