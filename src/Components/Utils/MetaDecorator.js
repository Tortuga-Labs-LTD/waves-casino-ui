import React from 'react'
import  { Helmet, HelmetProvider } from "react-helmet-async"
import PropTypes from 'prop-types'

const MetaDecorator = ({title, description}) => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Helmet>
            </HelmetProvider>
        </>
    )
}

MetaDecorator.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default MetaDecorator