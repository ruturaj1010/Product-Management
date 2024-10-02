import React, { createContext, useEffect, useState } from 'react'
import axios from './Axios'

export const ProductContext = createContext()

const Context = ( { children } ) => {

    const [products, setProducts] = useState( null )

    const getProducts = async () => {
        try {
            const { data } = await axios.get( "/products" );
            setProducts( data )
        } catch ( err ) {
            console.log( err );
        }
    }

    useEffect( () => {
        getProducts();
    }, [] )

    return (
        <ProductContext.Provider value={ [products, setProducts] }>
            { children }
        </ProductContext.Provider>
    )
}

export default Context