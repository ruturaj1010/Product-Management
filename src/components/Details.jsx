import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/Axios';
import Loading from './Loading';

const Details = () => {
    
    const [ product , setProduct ] = useState(null)

    const { id } = useParams();
    // console.log(id);

    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get( `/products/${id}` )
            // console.log(data);
            setProduct(data);
        } catch ( error ) {
            console.log( error );
        }
    }

    useEffect(()=>{
        getSingleProduct();
    } , [] );

    return (
        <div className='w-screen h-screen bg-zinc-50 flex items-center justify-between'>
            {product ? <div className='w-3/5 h-4/5 mx-auto bg-white flex items-center justify-between'>
                <div className='w-[35vw] h-96 mx-12 rounded-lg overflow-hidden'>
                    <img className='w-full h-full object-contain' src={product.image} alt="" />
                </div>
                <div className='w-[80%] h-2/3 flex flex-col justify-center gap-6 '>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-medium'>{product.title}</h1>
                        <h3 className='w-56 h-10 text-xl font-semibold mx-10'>$ {product.price}</h3>
                    </div>
                    <h3 className='capitalize text-lg text-gray-600'>{product.category}</h3>
                    <p className='text-lg text-wrap'>{product.description}</p>

                    <div className='flex items-center gap-4'>
                        <Link className='px-4 py-2 rounded-lg border-2 bg-white text-blue-500 hover:font-semibold hover:scale-105 border-blue-300 hover:bg-blue-50'>Edit</Link>
                        <Link className='px-4 py-2 rounded-lg border-2 bg-white text-red-500 hover:font-semibold hover:scale-105 border-red-300 hover:bg-red-50'>Delete</Link>
                    </div>
                </div>
            </div> : <Loading />}
        </div>
    )
}

export default Details