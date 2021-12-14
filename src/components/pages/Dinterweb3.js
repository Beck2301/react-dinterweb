import React from 'react'
import { Link } from 'react-router-dom'




function Dinterweb3() {
    return (
        <>
            <h1 className='text-6xl text-center m-7'>Página 3</h1>
            <div class="">
                <div className=''>
                    <h2 className='text-4xl text-center mt-14 m-auto'>Prueba ir a la página 1 o 2 todo carga al instante </h2>
                    <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/smiling-face-with-sunglasses_1f60e.png" alt="" className='m-auto w-14 mt-5' />
                </div>
                <div className='m-auto text-center mt-20'>
                <Link to='/react-dinterweb'>
                    <button class="px-10 py-3 mt-4 text-base text-white bg-red-500  rounded-3xl mr-2" >Ir a página 1</button>
                </Link>

                <Link to='/Dinterweb2'>
                    <button class="px-10 py-3 mt-4 text-base text-white bg-red-500  rounded-3xl" >Ir a página 2</button>
                </Link>
                </div>

            </div>
        </>
    )
}

export default Dinterweb3
