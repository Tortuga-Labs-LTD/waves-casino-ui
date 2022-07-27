import React from 'react'
import "./style.css"


export const WHeading = ({ text }) => {
    return (
        <>
            <h3 className="wheading"> { text } </h3>
        </>
    )
}

export const OHeading = ({ text }) => {
    return (
        <>
            <h3 className="oheading"> { text } </h3>
        </>
    )
}
