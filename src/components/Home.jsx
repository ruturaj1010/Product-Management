import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'

const Home = () => {

    const [products] = useContext( ProductContext )

    const [filteredProducts, setFilteredProducts] = useState( null );

    const { search } = useLocation()

    const category = decodeURIComponent( search.split( '=' )[1] )
    // console.log(category);

    const getProductCategory = async () => {
        try {
            const { data } = await axios.get( `/products/category/${category}` )
            setFilteredProducts( data )
        } catch ( error ) {
            console.log( error );
        }
    }

    useEffect( () => {
        if ( !filteredProducts || category === "undefined" ) setFilteredProducts( products )
        if ( category !== "undefined" ) getProductCategory();
    }, [category, products] );


    return (
        <div className='w-full min-h-screen flex relative'>
            <div className='w-[15%] h-screen sticky top-0 left-0'>
                <Navbar />
            </div>

            <div className='w-[85%] bg-zinc-700 p-4 pt-10'>

                <div className='flex flex-wrap gap-5 items-center mx-10 my-5'>

                    { filteredProducts ?
                        filteredProducts.map( ( item, index ) => (
                            <Link to={ `/details/${item.id}` } key={ index } className='w-52 h-64 border shadow rounded bg-white p-2 flex flex-col items-center'>
                                <div className='bg-contain bg-center bg-no-repeat w-full h-52 hover:scale-110 mt-3' style={ { backgroundImage: `url(${item.image})` } }></div>

                                <h1 className='text-sm font-semibold my-3 text-center hover:text-violet-700 cursor-default line-clamp-2 h-12'>{ item.title }</h1>
                            </Link>
                        ) )
                        : <Loading />
                    }
                </div>
            </div>
        </div>
    )
}

export default Home