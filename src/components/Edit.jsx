import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Edit = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [products, setProducts] = useContext( ProductContext )

    const [product, setProduct] = useState( {
        title: "",
        image: "",
        category: "",
        price: "",
        description: ""
    } )

    useEffect( () => {
        setProduct( products.filter( p => p.id == id )[0] )
    }, [id] )

    const changeHandler = ( e ) => {
        setProduct( { ...product, [e.target.name]: e.target.value } )
    }

    const addProductHandler = ( e ) => {
        e.preventDefault();

        if ( product.title.trim().length < 5 || product.image.trim().length < 5 || product.category.trim().length < 5 || product.description.trim().length < 10 ) {
            alert( "Please fill all fields properly!" )
            return;
        }

        const productIndex = products.findIndex( product => product.id == id )

        const copypro = [ ...products ]

        copypro[productIndex] = { ...copypro[productIndex], ...product }

        setProducts( copypro )
        toast.success("Product edited successfully!")

        // Saving data into local storage
        localStorage.setItem( "products", JSON.stringify( copypro ) )

        console.log( copypro );

        setProduct( {
            title: "",
            image: "",
            category: "",
            price: "",
            description: ""
        } )

        navigate( '/' )

    }

    return (
        <form onSubmit={ addProductHandler } className='w-screen h-screen flex flex-col items-center gap-4 bg-gray-300'>

            <h1 className='mt-32 text-3xl font-semibold w-2/5 '>Edit Product Details</h1>

            <input type="url" name='image' placeholder='Paste Image link...'
                className='w-2/5 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                value={ product && product.image }
                onChange={ changeHandler }
            />
            <input type="text" name='title' placeholder='Title...'
                className='w-2/5 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                value={ product && product.title }
                onChange={ changeHandler }
            />

            <div className='w-2/5 flex items-center gap-3'>
                <input type="text" name='category' placeholder='Category'
                    className='w-1/2 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                    value={ product && product.category }
                    onChange={ changeHandler }
                />

                <input type="number" name='price' placeholder='Price'
                    className='w-1/2 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                    value={ product && product.price }
                    onChange={ changeHandler }
                />
            </div>

            <textarea type="text" rows="4" name='description' placeholder='Description of your product...'
                className='w-2/5 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                value={ product && product.description }
                onChange={ changeHandler }
            />

            <div className='w-2/5'>
                <button className='py-2 px-3 my-1 border text-blue-600 font-semibold bg-sky-100 rounded-lg'>Add Edited Product</button>
            </div>
        </form>
    )
}

export default Edit