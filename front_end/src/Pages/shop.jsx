import React from 'react'
import Hero from '../Componenets/Hero/hero' 
import Popular from '../Componenets/Popular/popular'
import Offer from '../Componenets/Offers/Offer'
import NewCollection from '../Componenets/Newcollection/NewCollections'

const shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollection/>
        </div>
    )
}

export default shop