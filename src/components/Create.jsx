import React, { useState } from 'react'

const Create = () => {

    const [title, setTitle] = useState( "" )
    const [image, setImage] = useState( "" )
    const [category, setCategory] = useState( "" )
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState( "" )

    return (
        <form className='w-screen h-screen flex flex-col items-center gap-4 bg-gray-300'>

            <h1 className='mt-32 text-3xl font-semibold w-2/5 '>Add New Product</h1>

            <input type="url" placeholder='Image link'
                className='w-2/5 px-4 py-2 placeholder:text-xl placeholder:tracking-wider border border-sky-300 rounded-lg'
                value={ image }
                onChange={ ( e ) => setImage( e.target.value ) }
            />
            <input type="text" placeholder='Title'
                className='w-2/5 px-4 py-2 placeholder:text-xl placeholder:tracking-wider border border-sky-300 rounded-lg'
                value={ title }
                onChange={ ( e ) => setTitle( e.target.value ) }
            />

            <div className='w-2/5 flex items-center gap-3'>
                <input type="text" placeholder='Category'
                    className='w-1/2 px-4 py-2 placeholder:text-xl placeholder:tracking-wider border border-sky-300 rounded-lg'
                    value={ category }
                    onChange={ ( e ) => setCategory( e.target.value ) }
                />

                <input type="number" placeholder='Price'
                    className='w-1/2 px-4 py-2 placeholder:text-xl placeholder:tracking-wider border border-sky-300 rounded-lg'
                    value={ price }
                    onChange={ ( e ) => setPrice( e.target.value ) }
                />
            </div>

            <textarea type="text" rows="4" placeholder='Description'
                className='w-2/5 px-4 py-2 placeholder:text-xl placeholder:tracking-wider border border-sky-300 rounded-lg'
                value={ description }
                onChange={ ( e ) => setDescription( e.target.value ) }
            />
        </form>
    )
}

export default Create