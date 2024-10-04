import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useContext( ProductContext )

    const [title, setTitle] = useState( "" )
    const [image, setImage] = useState( "" )
    const [category, setCategory] = useState( "" )
    const [price, setPrice] = useState( "" )
    const [description, setDescription] = useState( "" )

    const addProductHandler = ( e ) => {
        e.preventDefault();

        if ( title.trim().length < 5 || image.trim().length < 5 || category.trim().length < 5 || price.trim().length < 2 || description.trim().length < 10 ) {
            alert( "Please fill all fields properly!" )
            return;
        }
        const product = { id: nanoid(), title, image, category, price, description }
        setProducts( [...products, product] )

        // Saving data into local storage
        localStorage.setItem( "products" , JSON.stringify([...products , product]) )

        console.log( products );
        setTitle( "" )
        setImage( "" )
        setCategory( "" )
        setPrice( "" )
        setDescription( "" )
        navigate( "/" );

    }


    return (
        <form onSubmit={ addProductHandler } className='w-screen h-screen flex flex-col items-center gap-4 bg-gray-300'>

            <h1 className='mt-32 text-3xl font-semibold w-2/5 '>Add New Product</h1>

            <input type="url" name='url' placeholder='Paste Image link...'
                className='w-2/5 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                value={ image }
                onChange={ ( e ) => setImage( e.target.value ) }
            />
            <input type="text" name='title' placeholder='Title...'
                className='w-2/5 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                value={ title }
                onChange={ ( e ) => setTitle( e.target.value ) }
            />

            <div className='w-2/5 flex items-center gap-3'>
                <input type="text" name='category' placeholder='Category'
                    className='w-1/2 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                    value={ category }
                    onChange={ ( e ) => setCategory( e.target.value ) }
                />

                <input type="number" name='number' placeholder='Price'
                    className='w-1/2 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                    value={ price }
                    onChange={ ( e ) => {
                        let val = e.target.value
                        if ( val > -1 || val !== "" ) setPrice( e.target.value )
                    } }
                />
            </div>

            <textarea type="text" rows="4" name='description' placeholder='Description of your product...'
                className='w-2/5 px-4 py-2 placeholder:text-base placeholder:tracking-wider border border-sky-300 rounded-lg'
                value={ description }
                onChange={ ( e ) => setDescription( e.target.value ) }
            />

            <div className='w-2/5'>
                <button className='py-2 px-3 my-1 border text-blue-600 font-semibold bg-sky-100 rounded-lg'>Add new product</button>
            </div>
        </form>
    )
}

export default Create